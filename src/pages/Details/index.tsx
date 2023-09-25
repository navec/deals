import { Breadcrumb } from "components/organisms/Breadcrumb";
import { ProductProps } from "components/organisms/Product";
import { Slider } from "components/organisms/Slider";
import { Collection, getOneDoc } from "config/queries";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import styles from "./index.module.css";

const useQuery = <T extends object>(
  collection: Collection,
  documentId: string
) => {
  const [state, setState] = useState<{
    data: null | T;
    error: undefined;
    isError: boolean;
    isLoading: boolean;
    isFetched: boolean;
  }>({
    data: null,
    error: undefined,
    isError: false,
    isLoading: false,
    isFetched: false,
  });

  useEffect(() => {
    if (!state.isFetched) {
      setState((previous) => ({ ...previous, isLoading: true }));

      getOneDoc(collection, documentId)
        .then((data: any) => setState((previous) => ({ ...previous, data })))
        .catch((error: any) => {
          setState((previous) => ({ ...previous, error, isError: true }));
        })
        .finally(() => {
          setState((previous) => ({
            ...previous,
            isLoading: false,
            isFetched: true,
          }));
        });
    }
  }, [collection, state.isFetched, documentId]);

  return state;
};

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isFetched } = useQuery<ProductProps>(
    Collection.PRODUCTS,
    id!
  );

  if (isLoading || !isFetched) {
    return <>Loading...</>;
  }

  if (isError || !data) {
    return <>Error...</>;
  }

  // const goBack = () => navigate(-1);
  return (
    <>
      <Breadcrumb items={[{ to: "#", name: data.category }]} name={data.name} />

      <Slider
        className={styles.slider}
        slides={data.images.map(({ src, alt }) => ({
          alt,
          src: `/${data.category}/${src}`,
        }))}
        withMinature
      />

      <h1 className={styles.title}>{data.name}</h1>

      <div className={styles.priceWhatsApp}>
        <div>{data.price} fr</div>
        <Link
          to="https://api.whatsapp.com/send?phone=+33665656646"
          style={{ color: "#25D366", fontSize: "2.2rem" }}
        >
          <IoLogoWhatsapp />
        </Link>
      </div>

      {data.stock && (
        <div
          style={{
            margin: "1rem auto",
            width: "calc(100% - 2rem)",
            maxWidth: 1280,
          }}
        >
          <span
            style={{
              padding: "0.8rem 1.5rem",
              background: "#3d7a65",
              color: "#fff",
              width: "fit-content",
              fontWeight: 300,
              textTransform: "uppercase",
            }}
          >
            En stock
          </span>
        </div>
      )}

      <p
        style={{
          margin: "4rem auto",
          color: "#777777",
          width: "calc(100% - 2rem)",
          maxWidth: 1280,
          fontFamily: "Barlow Condensed,sans-serif",
          fontSize: "1.2rem",
        }}
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </>
  );
};

export default Detail;
