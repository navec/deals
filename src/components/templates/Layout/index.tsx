import { MobileMenu } from "components/organisms/MobileMenu";
import { ProductProps } from "components/organisms/Product";
import { Search } from "components/organisms/Search";
import { Collection } from "config/queries";
import { useQuery } from "hooks";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import styles from "./index.module.css";

const Layout = () => {
  const { data: products } = useQuery<ProductProps>(Collection.PRODUCTS);
  const [isOpenSearch, setIsOpenNavSearch] = useState(false);

  return (
    <>
      <header className={styles.mobileHeader}>
        <MobileMenu
          products={products.filter((product) => product?.isActive)}
        />
      </header>
      <header className={styles.destopHeader}>
        <nav>
          <Link to="/" className={styles.logo}>
            <Logo style={{ marginTop: 10, width: 200 }} />
          </Link>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <Link to="/">Acceuil</Link>
            </li>
            <li className={styles.navItem}>
              <span>Catégories</span>
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
            <CiSearch
              fontSize="1.5rem"
              onClick={() => setIsOpenNavSearch(true)}
              style={{ cursor: "pointer" }}
            />
            <Search
              isVisible={isOpenSearch}
              close={() => setIsOpenNavSearch(false)}
              store={products}
            />
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
