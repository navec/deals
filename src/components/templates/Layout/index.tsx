import { MobileMenu } from "components/organisms/MobileMenu";
import { CiSearch } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import styles from "./index.module.css";

const Layout = () => (
  <>
    <header className={styles.mobileHeader}>
      <MobileMenu />
    </header>
    <header className={styles.destopHeader}>
      <nav>
        <Link to="/" className={styles.logo}>
          Congo Deals
        </Link>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link to="/">Acceuil</Link>
          </li>
          <li className={styles.navItem}>
            <span>Catégorie</span>
            <ul className={styles.subNav}>
              <li>
                <Link to="/meilleures-ventes">Meilleures ventes</Link>
              </li>
              <li>
                <Link to="/nouveaux-arrives">Nouveaux arrivés</Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link to="/produits">Produits</Link>
          </li>
        </ul>
        <div style={{ textAlign: "end" }}>
          <CiSearch fontSize="1.5rem" />
        </div>
      </nav>
    </header>

    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
