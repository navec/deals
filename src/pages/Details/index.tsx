import { Breadcrumb } from "components/organisms/Breadcrumb";
import { ProductProps } from "components/organisms/Product";
import { Slider } from "components/organisms/Slider";
import { Collection, getOneDoc } from "config/queries";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  // const navigate = useNavigate();
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

      <h1
        style={{
          margin: "4rem 1rem 1rem",
          fontSize: "30px",
          textTransform: "none",
          fontWeight: 400,
          color: "#222",
          fontFamily: "Harmonia Sans Pro Cyr",
        }}
      >
        {data.name}
      </h1>

      <div
        style={{
          margin: "0px 1rem",
          color: "#222",
          display: "inline-block",
          fontSize: "30px",
          fontWeight: 600,
          fontFamily: '"Barlow Condensed",sans-serif',
          lineHeight: 1.1,
        }}
      >
        {data.price} fr
      </div>

      <div
        style={{
          margin: "0 1rem",
          padding: "0.8rem 1.5rem",
          background: "#3d7a65",
          color: "#fff",
          width: "fit-content",
          fontWeight: 300,
          textTransform: "uppercase",
        }}
      >
        En stock
      </div>

      <p
        style={{ margin: "2rem 1rem", color: "#777777" }}
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
      {/* <div
        style={{
          margin: "-1rem",
          display: "flex",
          flexDirection: "column",
          height: "calc(100% + 1rem)",
          position: "relative",
        }}
      >
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            margin: "0 1.5rem",
            position: "absolute",
            width: "calc(100% - 3rem)",
            top: "1rem",
          }}
        >
          <span
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              display: "flex",
              background: "#fff",
              alignItems: "center",
              borderRadius: "50%",
            }}
            onClick={goBack}
          >
            <HiArrowNarrowLeft fontSize="1.3rem" />
          </span>
          <a
            href="tel:+242666666666"
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              display: "flex",
              background: "#fff",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <AiOutlineWhatsApp
              style={{ fontSize: "1.5rem", color: "#000000" }}
            />
          </a>
        </div>
        <img
          src={faker.image.url()}
          alt=""
          style={{ height: "60vh", width: "100%" }}
        />
        <div
          style={{
            marginTop: "2rem",
            flex: 1,
            backgroundColor: "#fff",
            padding: "1rem",
            borderRadius: "15px 15px 0 0",
            paddingBottom: "3rem",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", margin: "0 0 5px 0" }}>
            {data.name}
          </h1>
          <div style={{ marginTop: "2rem", color: "#777777" }}>
            {data.summary}
          </div>

          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              color: "#3d7a65",
              fontWeight: 500,
              marginTop: "3rem",
              fontSize: "1.5rem",
              alignItems: "center",
            }}
          >
            <FaMoneyBillWave />
            <span>{data.price} fr</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.5rem",
              fontWeight: 500,
              color: "#777777",
            }}
          >
            <span>QUANTITÉ(S)</span>
            <span>{data.stock} ps</span>
          </div>

          <div>
            <h3 style={{ margin: "2.5rem 0 0.5rem" }}>
              {"Details".toUpperCase()}
            </h3>
            <div
              style={{ color: "#777777" }}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Detail;
