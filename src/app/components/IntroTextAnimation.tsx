"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const IntroTextAnimation = () => {
  const intro = [
    `B`,
    1000,
    `BR`,
    1000,
    `BRE`,
    1000,
    `BREA`,
    1000,
    `BREAT`,
    1000,
    `BREATH`,
    1000,
    `BREATHE`,
    1000,
  ];
  return (
    <div className="mt-12">
      <TypeAnimation
        sequence={intro}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default IntroTextAnimation;
