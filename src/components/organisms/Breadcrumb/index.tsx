import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const FIRST_ITEM = { to: "/", name: "Acceuil" };

type BreadcrumbProps = {
  items: { to: string; name: string }[];
  name: string;
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ items, name }) => {
  return (
    <ul className={styles.layout}>
      {[FIRST_ITEM, ...items].map(({ to, name }) => (
        <li key={name.toLowerCase()}>
          <Link className={styles.link} to={to}>
            {name}
          </Link>
        </li>
      ))}
      <li className={styles.current}>{name}</li>
    </ul>
  );
};
