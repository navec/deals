import { FC, Fragment, JSX } from "react";

type ListProps = {
  items: JSX.Element[];
};
export const List: FC<ListProps> = ({ items }) => (
  <>
    {items.map((item) => (
      <Fragment key={item.key}>{item}</Fragment>
    ))}
  </>
);
