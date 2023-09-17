import { faker } from "@faker-js/faker";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div
      style={{
        margin: "-1rem",
        display: "flex",
        flexDirection: "column",
        height: "calc(100% + 1rem)",
        position: "relative",
      }}
    >
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          margin: "0 1.5rem",
          position: "absolute",
          width: "calc(100% - 3rem)",
          top: "1rem",
        }}
      >
        <span
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
            display: "flex",
            background: "#fff",
            alignItems: "center",
            borderRadius: "50%",
          }}
          onClick={goBack}
        >
          <HiArrowNarrowLeft fontSize="1.3rem" />
        </span>
        <span
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
            display: "flex",
            background: "#fff",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <AiFillHeart fontSize="1.3rem" />
        </span>
      </div>
      <img
        src={faker.image.url()}
        alt=""
        style={{ height: "60vh", width: "100%" }}
      />
      <div
        style={{
          marginTop: "2rem",
          flex: 1,
          backgroundColor: "#fff",
          padding: "1rem",
          borderRadius: "15px 15px 0 0",
          paddingBottom: "3rem",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", margin: "0 0 5px 0" }}>
          Lorem ipsum dolor
        </h1>

        <div
          style={{ display: "flex", gap: 5, color: "#3d7a65", fontWeight: 500 }}
        >
          <AiFillStar />
          <span>4,5 (15 reviews)</span>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem" }}>Details</h4>
          <span style={{ color: "#777777" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia modi
            sint totam pariatur doloremque error provident quis facere commodi,
            incidunt harum, dignissimos earum temporibus iure inventore.
            Distinctio mollitia id dolore?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
