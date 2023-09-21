import { faker } from "@faker-js/faker";
import { FC, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

type Product = {
  id: string;
  name: string;
  price: number;
  state: string;
  summary: string;
  description: string;
  stock: number;
};

type TabbedContentProps = {
  tabs: { title: string; products: Product[] }[];
};

export const TabbedContent: FC<TabbedContentProps> = ({ tabs }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const selectIndex = (id: number) => setTabIndex(id);
  const { products } = tabs[tabIndex];

  return (
    <>
      <ul className={styles.title}>
        {tabs.map(({ title }, index) => (
          <li
            onClick={() => selectIndex(index)}
            className={index === tabIndex ? styles.titleActive : undefined}
            // className={index === active ? "titleActive" : undefined}
            key={title}
          >
            {title}
          </li>
        ))}
      </ul>
      <div style={{ padding: "1rem" }}>
        {products.map(({ name, summary, id }) => (
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
      </div>
    </>
  );
};
