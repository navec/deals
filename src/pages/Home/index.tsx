import { faker } from "@faker-js/faker";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import styles from "./index.module.css";

const Home = () => {
  return (
    <section>
      <div style={{ position: "relative" }}>
        <div
          style={{
            background: "#3d7a65",
            position: "absolute",
            height: "calc(100% + 6rem)",
            width: "calc(100% + 2rem)",
            top: "-4rem",
            left: "-1rem",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <HiMenuAlt2
            style={{
              color: "#ffffff",
              position: "relative",
              fontSize: "1.5rem",
            }}
          />
          <FaSearch
            style={{
              color: "#ffffff",
              position: "relative",
              fontSize: "1.5rem",
            }}
          />
        </div>
        <h1 style={{ color: "#ffffff", position: "relative" }}>
          Mon nom de site
        </h1>

        <img
          style={{ position: "relative" }}
          src={faker.image.url()}
          alt="to be replace"
          className={styles.poster}
        />
      </div>

      <h2
        style={{
          borderBottom: "1px solid",
          marginTop: "3rem",
          color: "#3d7a65",
        }}
      >
        Produits
      </h2>
      <ul style={{ margin: 0, padding: 0 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <li
            key={index}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              marginTop: "2rem",
              position: "relative",
            }}
          >
            <AiTwotoneHeart
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                fontSize: "2rem",
                color: "#aaa",
              }}
            />
            <img
              src={faker.image.url()}
              alt="to be replace"
              style={{ width: "100%" }}
            />
            <div style={{ padding: 10 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    margin: "0 0 5px",
                  }}
                >
                  LOREM IPSUM DOLOR
                </h3>
                <span style={{ color: "#777" }}>
                  Lorem ipsum dolor sit amet consectetur
                </span>
                <span
                  style={{
                    fontSize: 12,
                    display: "block",
                    textAlign: "right",
                    marginTop: 5,
                  }}
                >
                  Il en reste 4 en stock
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
