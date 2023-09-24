import { FC } from "react";
import styles from "./index.module.css";

type TabTitlesProps = {
  titles: string[];
  tabIndex: number;
  selectTabIndex: (index: number) => void;
};

export const TabTitles: FC<TabTitlesProps> = ({
  titles,
  tabIndex,
  selectTabIndex,
  ...props
}) => {
  return (
    <ul className={styles.title} {...props}>
      {titles.map((title, index) => {
        return (
          <li
            onClick={() => selectTabIndex(index)}
            className={index === tabIndex ? styles.titleActive : undefined}
            key={title}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
};
