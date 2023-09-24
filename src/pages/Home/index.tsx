import { faker } from "@faker-js/faker";
import { ProductProps as Product } from "components/organisms/Product";
import { Slider } from "components/organisms/Slider";
import { Tabs } from "components/organisms/Tabs";
import { Collection } from "config/queries";
import { useQuery } from "hooks";
import styles from "./index.module.css";

const slides = [0, 1, 2].map((index) => ({
  src: faker.image.urlPicsumPhotos(),
  alt: `alt name ${index}`,
}));

const Home = () => {
  const products = useQuery<Product>(Collection.PRODUCTS);

  return (
    <>
      <Slider slides={slides} />

      <section className={styles.products}>
        <Tabs
          tabs={[
            { title: "Best Sellers", products: products.data },
            { title: "New Arrivals", products: [] },
            { title: "Sales Products", products: [] },
          ]}
        />
      </section>
    </>
  );
};

export default Home;
