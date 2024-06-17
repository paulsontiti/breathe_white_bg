import React from "react";
import CallToAction from "./callToActionButtons";

type Props = {
  imgSrc: string;
  description: string;
  title: string;
};
function Product({ title, description, imgSrc }: Props) {
  return (
    <div className="w-full lg:w-1/3 mt-8 flex flex-col items-center">
      <h3 className="text-3xl my-4">{title}</h3>
      <img src={imgSrc} alt={title} className="my-4 h-72" />
      <p className="my-4 px-8">{description}</p>
      <CallToAction />
    </div>
  );
}

export default Product;
