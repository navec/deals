import { FC, useState } from "react";
import { AiOutlineMenu, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { LinkProps, Link as ReactRouterLink } from "react-router-dom";
import styles from "./index.module.css";

const Link: FC<LinkProps & { onClose: () => void }> = ({
  onClose,
  ...props
}) => <ReactRouterLink onClick={onClose} {...props} />;

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState<string>();

  const onClose = () => setIsOpen(false);
  console.log(selectedSubMenu === "categorie", selectedSubMenu);

  return (
    <>
      <AiOutlineMenu fontSize="1.5rem" onClick={() => setIsOpen(true)} />
      <div>Congo Deals</div>
      <CiSearch fontSize="1.5rem" />
      <div
        onClick={() => setIsOpen(false)}
        className={isOpen ? `${styles.layout} ${styles.active}` : styles.layout}
      />
      <nav
        className={isOpen ? `${styles.layout} ${styles.active}` : styles.layout}
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
              <span>Catégorie</span>
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
