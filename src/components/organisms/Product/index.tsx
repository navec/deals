import { FC } from "react";
import { MdWhatsapp } from "react-icons/md";
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
  tags: string[];
};

export const Product: FC<ProductProps> = (data) => {
  const { src, alt } = getFirstImage(data.images, data.category, data.name);

  return (
    <article key={data.id} className={styles.layout}>
      <Link
        to="https://api.whatsapp.com/send?phone=+33665656646"
        className={styles.iconCta}
      >
        <MdWhatsapp />
      </Link>
      <Link to={`details/${data.id}`} className={styles.link}>
        {data.tags && (
          <div className={styles.tag}>
            {data.tags.map((tag) => (
              <span key={tag} className={styles[tag]}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <img src={src} alt={alt} className={styles.image} />
        <div className={styles.description}>
          <div className={styles.category}>{data.category}</div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.priceAndStock}>
            <div>{data.price} fr</div>
            <div>Qté(s): {data.stock} </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
