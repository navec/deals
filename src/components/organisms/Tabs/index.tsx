import { FC, useState } from "react";
import { List } from "../List";
import { Product, ProductProps } from "../Product";
import { TabTitles } from "../TabTitle";

type TabbedContentProps = {
  tabs: { title: string; products: ProductProps[] }[];
};

export const Tabs: FC<TabbedContentProps> = ({ tabs }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const products = tabs[tabIndex].products.map((item) => (
    <Product key={item.id} {...item} />
  ));

  return (
    <>
      <TabTitles
        titles={tabs.map(({ title }) => title)}
        selectTabIndex={setTabIndex}
        tabIndex={tabIndex}
      />
      <List items={products} />
    </>
  );
};
