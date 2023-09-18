import { faker } from "@faker-js/faker";
import { Collection, getOneDoc } from "config/queries";
import { useEffect, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  price: number;
  state: string;
  summary: string;
  description: string;
  stock: number;
};

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
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, isFetched } = useQuery<Product>(
    Collection.PRODUCTS,
    id!
  );

  if (isLoading || !isFetched) {
    return <>Loading...</>;
  }

  if (isError || !data) {
    return <>Error...</>;
  }

  const goBack = () => navigate(-1);
  return (
    <div
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
          <AiOutlineWhatsApp style={{ fontSize: "1.5rem", color: "#000000" }} />
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
        <h1 style={{ fontSize: "1.5rem", margin: "0 0 5px 0" }}>{data.name}</h1>
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
          {/* <span style={{ color: "#777777" }}> */}
          <div
            style={{ color: "#777777" }}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          {/* </span> */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
