import { Outlet } from "react-router-dom";
import styles from "./index.module.css";

// const navigations = [
//   { link: "/", name: "Home" },
//   { link: "/contact", name: "Contact" },
// ];

const Layout = () => (
  <div className={styles.container}>
    {/* <nav className="menu">
      <ul>
      {navigations.map(({ link, name }) => (
        <li key={name.toLowerCase()}>
        <Link to={link}>{name}</Link>
        </li>
        ))}
        </ul>
      </nav> */}

    <Outlet />
  </div>
);

export default Layout;
