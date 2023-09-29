import { List } from "components/organisms/List";
import { Product, ProductProps } from "components/organisms/Product";
import { Collection } from "config/queries";
import { useQuery } from "hooks";

const NEW = "new";

const NewArrivals = () => {
  const { data } = useQuery<ProductProps>(Collection.PRODUCTS);

  const products = data
    .filter((product) => product?.isActive && product.tags.includes(NEW))
    .map((item) => <Product key={item.id} {...item} />);

  return <List items={products} />;
};

export default NewArrivals;
