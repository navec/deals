import { FC, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import styles from "./index.module.css";

const goBack = (id: number, lastId: number) => (id === lastId ? 0 : id + 1);
const goNext = (id: number, lastId: number) => (id === 0 ? lastId : id - 1);

type SliderProps = {
  slides: { src: string; alt: string }[];
  className?: string;
  withMinature?: boolean;
};

export const Slider: FC<SliderProps> = ({
  slides,
  className,
  withMinature = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { src, alt } = slides[currentIndex];
  const lastSlideId = slides.length - 1;

  const nextSlide = () => setCurrentIndex((id) => goBack(id, lastSlideId));
  const prevSlide = () => setCurrentIndex((id) => goNext(id, lastSlideId));
  const selectSlide = (id: number) => setCurrentIndex(id);

  return (
    <>
      <section style={{ position: "relative" }} className={className}>
        <img src={src} alt={alt} style={{ width: "100%", maxWidth: 425 }} />
        <div className={styles.navigationArrow}>
          <MdArrowBackIosNew
            onClick={prevSlide}
            fontSize="2.2rem"
            color="#fff"
          />
          <MdArrowForwardIos
            onClick={nextSlide}
            fontSize="2.2rem"
            color="#fff"
          />
        </div>
        <div className={styles.navigationContainerBtn}>
          {slides.map(({ src }, index) => (
            <span
              className={styles.navigationBtn}
              key={src}
              style={{ ...(index === currentIndex && { background: "#fff" }) }}
              onClick={() => selectSlide(index)}
            />
          ))}
        </div>
      </section>
      {withMinature && (
        <ul
          style={{
            listStyle: "none",
            margin: "1.5rem 1rem",
            padding: 0,
            display: "flex",
            gap: 10,
            overflow: "hidden",
          }}
        >
          {slides.map((slide) => (
            <li>
              <img src={slide.src} alt={slide.alt} height={100} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
