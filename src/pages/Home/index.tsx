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

const TAG = {
  BEST: "best",
  NEW: "new",
} as const;

const Home = () => {
  const { data: products } = useQuery<Product>(Collection.PRODUCTS);
  const bestSellers = products.filter((product) =>
    product.tags.includes(TAG.BEST)
  );
  const newArrivals = products.filter((product) =>
    product.tags.includes(TAG.NEW)
  );

  return (
    <>
      <Slider slides={slides} />

      <section className={styles.products}>
        <Tabs
          tabs={[
            { title: "Meilleures ventes", products: bestSellers },
            { title: "Nouveaux arrivés", products: newArrivals },
            { title: "Tous les produits", products: products },
          ]}
        />
      </section>
    </>
  );
};

export default Home;
