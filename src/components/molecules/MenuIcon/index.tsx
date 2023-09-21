import { IconBar } from "components/atoms/IconBar";
import styles from "./index.module.css";

export const MenuIcon = () => (
  <button className={styles.nav}>
    <IconBar />
    <IconBar />
    <IconBar />
  </button>
);
