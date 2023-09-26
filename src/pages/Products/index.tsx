import { List } from "components/organisms/List";
import { Product, ProductProps } from "components/organisms/Product";
import { Collection } from "config/queries";
import { useQuery } from "hooks";

const Products = () => {
  const { data } = useQuery<ProductProps>(Collection.PRODUCTS);
  const products = data.map((item) => <Product key={item.id} {...item} />);
  return <List items={products} />;
};

export default Products;
