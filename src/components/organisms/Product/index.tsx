import { FC } from "react";
import { Link } from "react-router-dom";
import { getFirstImage } from "./helper/getFistImage";
import styles from "./index.module.css";

export type ProductProps = {
  id: string;
  name: string;
  category: string;
  price: number;
  state: string;
  summary: string;
  description: string;
  stock: number;
  images: { src: string; alt: string }[];
};

export const Product: FC<ProductProps> = (props) => {
  const { src, alt } = getFirstImage(props.images, props.category, props.name);

  return (
    <article key={props.id} className={styles.layout}>
      <Link to={`details/${props.id}`} className={styles.link}>
        <div className={styles.tag}>new</div>
        <img src={src} alt={alt} className={styles.image} />
        <div style={{ padding: "0.5rem" }}>
          <div className={styles.category}>{props.category}</div>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.priceAndStock}>
            <div>{props.price} fr</div>
            <div>Qté(s): {props.stock} </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
