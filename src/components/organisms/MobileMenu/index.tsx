import { FC, useState } from "react";
import { AiOutlineMenu, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { LinkProps, Link as ReactRouterLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ProductProps as Product } from "../Product";
import { Search } from "../Search";
import styles from "./index.module.css";

const Link: FC<LinkProps & { onClose: () => void }> = ({
  onClose,
  ...props
}) => <ReactRouterLink onClick={onClose} {...props} />;

export const MobileMenu: FC<{ products: Product[] }> = ({ products }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenSearch, setIsOpenNavSearch] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState<string>();

  const onClose = () => setIsOpenNav(false);

  return (
    <>
      <AiOutlineMenu fontSize="1.5rem" onClick={() => setIsOpenNav(true)} />
      <div>
        <Logo style={{ width: 175 }} />
      </div>
      <div style={{ position: "relative" }}>
        <CiSearch fontSize="1.5rem" onClick={() => setIsOpenNavSearch(true)} />

        <Search
          isVisible={isOpenSearch}
          close={() => setIsOpenNavSearch(false)}
          store={products}
        />
      </div>
      <div
        onClick={() => setIsOpenNav(false)}
        className={
          isOpenNav ? `${styles.layout} ${styles.active}` : styles.layout
        }
      />
      <nav
        className={
          isOpenNav ? `${styles.layout} ${styles.active}` : styles.layout
        }
      >
        <div className={styles.title}>Congo Deals</div>
        <ul>
          <li className={styles.navItem}>
            <Link onClose={onClose} to="/">
              Acceuil
            </Link>
          </li>
          <li className={styles.navItem}>
            <span
              onClick={() =>
                setSelectedSubMenu((prev) => (prev ? undefined : "categorie"))
              }
            >
              <span>Catégories</span>
              {selectedSubMenu === "categorie" ? (
                <AiOutlineMinus />
              ) : (
                <AiOutlinePlus />
              )}
            </span>
            {selectedSubMenu === "categorie" && (
              <ul
                className={
                  selectedSubMenu === "categorie"
                    ? `${styles.subNav} ${styles.active}`
                    : styles.subNav
                }
              >
                <li>
                  <Link onClose={onClose} to="/meilleures-ventes">
                    Meilleures ventes
                  </Link>
                </li>
                <li>
                  <Link onClose={onClose} to="/nouveaux-arrives">
                    Nouveaux arrivés
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navItem} onClick={onClose}>
            <Link onClose={onClose} to="/produits">
              Produits
            </Link>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </>
  );
};
