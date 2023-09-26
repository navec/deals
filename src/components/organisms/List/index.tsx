import { FC, Fragment, JSX } from "react";
import styles from "./index.module.css";

type ListProps = {
  items: JSX.Element[];
};
export const List: FC<ListProps> = ({ items }) => (
  <div className={styles.listContainer}>
    {items.map((item) => (
      <Fragment key={item.key}>{item}</Fragment>
    ))}
  </div>
);
