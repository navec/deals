import { faker } from "@faker-js/faker";
import { AiOutlineMenu } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { PiGridFourFill, PiHardDrivesFill } from "react-icons/pi";
import { Link } from "react-router-dom";
// const Home = () => {
//   return (
//     <section>
//       <div style={{ position: "relative" }}>
//         <div
//           style={{
//             background: "#3d7a65",
//             position: "absolute",
//             height: "calc(100% + 6rem)",
//             width: "calc(100% + 2rem)",
//             top: "-4rem",
//             left: "-1rem",
//           }}
//         />
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             position: "relative",
//           }}
//         >
//           <HiMenuAlt2
//             style={{
//               color: "#ffffff",
//               position: "relative",
//               fontSize: "1.5rem",
//             }}
//           />
//           <FaSearch
//             style={{
//               color: "#ffffff",
//               position: "relative",
//               fontSize: "1.5rem",
//             }}
//           />
//         </div>
//         <h1 style={{ color: "#ffffff", position: "relative" }}>
//           Mon nom de site
//         </h1>

//         <img
//           style={{ position: "relative" }}
//           src={faker.image.url()}
//           alt="to be replace"
//           className={styles.poster}
//         />
//       </div>

//       <h2
//         style={{
//           borderBottom: "1px solid",
//           marginTop: "3rem",
//           color: "#3d7a65",
//         }}
//       >
//         Produits
//       </h2>
//       <ul style={{ margin: 0, padding: 0 }}>
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
//           <li
//             key={index}
//             style={{
//               boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//               marginTop: "2rem",
//               position: "relative",
//             }}
//           >
//             <AiTwotoneHeart
//               style={{
//                 position: "absolute",
//                 top: "0.5rem",
//                 right: "0.5rem",
//                 fontSize: "2rem",
//                 color: "#aaa",
//               }}
//             />
//             <img
//               src={faker.image.url()}
//               alt="to be replace"
//               style={{ width: "100%" }}
//             />
//             <div style={{ padding: 10 }}>
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <h3
//                   style={{
//                     fontSize: "1rem",
//                     margin: "0 0 5px",
//                   }}
//                 >
//                   LOREM IPSUM DOLOR
//                 </h3>
//                 <span style={{ color: "#777" }}>
//                   Lorem ipsum dolor sit amet consectetur
//                 </span>
//                 <span
//                   style={{
//                     fontSize: 12,
//                     display: "block",
//                     textAlign: "right",
//                     marginTop: 5,
//                   }}
//                 >
//                   Il en reste 4 en stock
//                 </span>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "end" }}>
        <AiOutlineMenu fontSize="2rem" color="#000" />
      </div>

      <h1>Explore</h1>

      <div style={{ display: "flex", gap: 15 }}>
        <div
          style={{
            width: 70,
            height: 70,
            color: "#fff",
            backgroundColor: "#3d7a65",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          ALL
        </div>
        {[MdOutlineComputer, PiHardDrivesFill].map((Icon, index) => (
          <div
            key={index}
            style={{
              width: 70,
              height: 70,
              color: "#000",
              backgroundColor: "#eeeeee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
          >
            <Icon style={{ fontSize: "2rem" }} />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", marginTop: "2rem" }}>
        <div style={{ flex: 1 }}>10 produits</div>
        <div style={{ display: "flex", gap: 10 }}>
          <FaListUl fontSize="1.2rem" />
          <PiGridFourFill fontSize="1.2rem" />
        </div>
      </div>

      <div>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <Link
            to={`details/${index}`}
            key={index}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginTop: "2rem",
              display: "block",
              textDecoration: "none",
              color: "#000000",
            }}
          >
            <img src={faker.image.url()} alt="" style={{ width: "100%" }} />
            <div style={{ padding: "0.5rem" }}>
              <h3 style={{ margin: 0 }}>Lorem ipsum dolor</h3>
              <div style={{ marginTop: 10, color: "#777" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
