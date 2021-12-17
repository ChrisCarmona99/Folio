import React from "react";
import { IndividualImage } from "./IndividualImage";

export const Images = ({ images, index }) => {
  const imageList = images.map((image) => (
    <IndividualImage key={image.id} image={image} />
  ));

  console.log(index);
  return imageList[index];
};
