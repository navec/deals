import { faker } from "@faker-js/faker";
import { Collection, getAllDocs } from "config/queries";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineWhatsApp } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { PiGridFourFill, PiHardDrivesFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const useQuery = <T extends object>(
  collection: Collection,
  defaultData: T[] = []
) => {
  const [state, setState] = useState({
    data: defaultData,
    error: undefined,
    isError: false,
    isLoading: false,
    isFetched: false,
  });

  useEffect(() => {
    if (!state.isFetched) {
      setState((previous) => ({ ...previous, isLoading: true }));

      getAllDocs(collection)
        .then((data: T[]) => setState((previous) => ({ ...previous, data })))
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
  }, [collection, state.isFetched]);

  return state;
};

type Product = {
  id: string;
  name: string;
  price: number;
  state: string;
  summary: string;
  description: string;
  stock: number;
};

const Home = () => {
  const products = useQuery<Product>(Collection.PRODUCTS);

  return (
    <div>
      <div style={{ textAlign: "end" }}>
        <AiOutlineMenu fontSize="2rem" color="#000" />
      </div>

      <h1>Explore</h1>

      <div style={{ display: "flex", gap: 15 }}>
        <div
          style={{
            width: 70,
            height: 70,
            color: "#fff",
            backgroundColor: "#3d7a65",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          ALL
        </div>
        {[MdOutlineComputer, PiHardDrivesFill].map((Icon, index) => (
          <div
            key={index}
            style={{
              width: 70,
              height: 70,
              color: "#000",
              backgroundColor: "#eeeeee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
          >
            <Icon style={{ fontSize: "2rem" }} />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", marginTop: "3rem" }}>
        <div style={{ flex: 1 }}>{`${products.data.length} produit${
          products.data.length === 1 ? "" : "s"
        }`}</div>
        <div style={{ display: "flex", gap: 10 }}>
          <FaListUl fontSize="1.2rem" />
          <PiGridFourFill fontSize="1.2rem" />
        </div>
      </div>

      <div>
        {products.data.map(({ name, summary, id }) => (
          <div key={id} style={{ position: "relative" }}>
            <a
              href="tel:+242666666666"
              style={{
                position: "absolute",
                fontSize: "2rem",
                color: "#000000",
                right: "1rem",
                top: "1rem",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AiOutlineWhatsApp />
            </a>
            <Link
              to={`details/${id}`}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                marginTop: "2rem",
                display: "block",
                textDecoration: "none",
                color: "#000000",
              }}
            >
              <img src={faker.image.url()} alt="" style={{ width: "100%" }} />
              <div style={{ padding: "0.5rem" }}>
                <h3 style={{ margin: 0 }}>{name}</h3>
                <div style={{ marginTop: 10, color: "#777" }}>{summary}</div>
                {/* <div>{description}</div> */}
                {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
              </div>
            </Link>
          </div>
        ))}
        {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <div key={index} style={{ position: "relative" }}>
            <a
              href="tel:+242666666666"
              style={{
                position: "absolute",
                fontSize: "2rem",
                color: "#000000",
                right: "1rem",
                top: "1rem",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AiOutlineWhatsApp />
            </a>
            <Link
              to={`details/${index}`}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                marginTop: "2rem",
                display: "block",
                textDecoration: "none",
                color: "#000000",
              }}
            >
              <img src={faker.image.url()} alt="" style={{ width: "100%" }} />
              <div style={{ padding: "0.5rem" }}>
                <h3 style={{ margin: 0 }}>Lorem ipsum dolor</h3>
                <div style={{ marginTop: 10, color: "#777" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </div>
              </div>
            </Link>
          </div>
        ))} */}
        <br />
      </div>
    </div>
  );
};

export default Home;
