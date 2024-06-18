"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const IntroTextAnimation = () => {
  const intro = [`Easy`, 500, `Breathing`, 500, `with`, 500, `BREATHE`, 500];
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
