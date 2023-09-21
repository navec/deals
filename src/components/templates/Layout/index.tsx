import { Menu } from "components/organisms/Menu";
import { Outlet } from "react-router-dom";
import styles from "./index.module.css";

const Layout = () => (
  <>
    <header className={styles.header}>
      <Menu />
      <nav style={{ position: "absolute" }}></nav>
    </header>

    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
