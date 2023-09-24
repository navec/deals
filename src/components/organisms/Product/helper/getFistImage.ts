import { faker } from "@faker-js/faker";
import { ProductProps } from "..";

const DEFAULT_IMAGE_SRC = faker.image.url();

export const getFirstImage = (
  images: ProductProps["images"],
  category: string,
  name: string
) => {
  if (images.length) {
    return {
      alt: `${category}/${images[0].alt}`,
      src: `${category}/${images[0].src}`,
    };
  }
  return { src: DEFAULT_IMAGE_SRC, alt: name };
};
