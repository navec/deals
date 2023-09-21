import { faker } from "@faker-js/faker";
import { Slider } from "components/organisms/Slider";
import { TabbedContent } from "components/organisms/TabContent";
import { Collection } from "config/queries";
import { useQuery } from "hooks";

type Product = {
  id: string;
  name: string;
  price: number;
  state: string;
  summary: string;
  description: string;
  stock: number;
};

const slides = [0, 1, 2].map((index) => ({
  src: faker.image.urlPicsumPhotos(),
  alt: `alt name ${index}`,
}));

const Home = () => {
  const products = useQuery<Product>(Collection.PRODUCTS);

  return (
    <>
      <Slider slides={slides} />

      <section>
        <TabbedContent
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
