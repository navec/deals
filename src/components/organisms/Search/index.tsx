import { FC, JSX, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { List } from "../List";
import { Product, ProductProps } from "../Product";
import styles from "./index.module.css";

type SearchProps = {
  isVisible: boolean;
  close: () => void;
  store: ProductProps[];
};
export const Search: FC<SearchProps> = ({ isVisible, close, store }) => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (value.length > 2) {
      setProducts(
        store
          .filter(
            ({ name }) => name.toLowerCase().search(value.toLowerCase()) !== -1
          )
          .map((item) => <Product key={item.id} {...item} />)
      );
    } else {
      setProducts([]);
    }
  }, [value, store]);

  return (
    <div
      className={
        isVisible ? `${styles.layout} ${styles.active}` : styles.layout
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
          padding: "0 15px",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: '"Barlow Condensed",sans-serif',
            fontWeight: 400,
            lineHeight: "1.1",
            color: "#222",
          }}
        >
          Qu'est-ce que vous cherchez ?
        </span>
        <AiOutlineClose
          fontSize="2rem"
          onClick={close}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div
        style={{
          margin: "1rem auto 0",
          position: "relative",
          width: "calc(100% - 30px)",
        }}
      >
        <input
          className={styles.input}
          type="text"
          placeholder="Cherchez ici ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.searchBtn}>
          <CiSearch fontSize="1.5rem" />
        </button>
        <div>
          <div></div>
        </div>
      </div>
      {!!products.length && <List items={products} />}
      {value.length > 2 && !products.length && (
        <div style={{ margin: "0 auto", width: "calc(100% - 2rem)" }}>
          Aucun produit trouvé
        </div>
      )}
    </div>
  );
};
