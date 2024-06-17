"use client";
import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import IntroTextAnimation from "./IntroTextAnimation";
import { useRouter } from "next/navigation";
import CallToAction from "./callToActionButtons";

export const gradient =
  "bg-gradient-to-br from-orange-700 via-pink-500 to-yellow-500";
function HeroSection() {
  const router = useRouter();
  const [expandMore, setExpandMore] = useState(true);
  const [showCv, setShowCv] = useState(false);
  return (
    <section className="container xl:px-40">
      <h1
        className="text-white px-4
                        mb-4 text-3xl md:text-5xl font-extrabold
                        "
      >
        <IntroTextAnimation />
      </h1>
      <div
        className="sm:grid px-4 sm:px-1 gap-4 sm:grid-cols-12 md:px-4 md:gap-8
      lg:mx-8 xl:mx-12 max-w-full mt-10"
      >
        <div className="w-full col-span-5 place-self-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.1,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="w-full h-96"
            style={{
              backgroundImage: `url(/assets/th.jpeg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img
              src="/assets/dp.jpg"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 
              -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
              style={{
                minWidth: "100%",
                minHeight: "auto",
                objectFit: "cover",
              }}
            /> */}
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          className="col-span-7 place-self-center text-center lg:text-left h-full"
        >
          <p className="text-white text-base mb-4 mt-4 text-left ">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
              Revitalize and Breathe
            </h1>
            <p className="mt-5 text-lg text-center text-neutral-500 max-width-4xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet
            </p>
          </p>
          <CallToAction />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

type ButtonParamstype = {
  label: string;
  classNames?: string;
  gradient?: string;
  onClick: () => void;
  icon?: ReactNode;
};
function Button({ label, classNames, gradient, onClick }: ButtonParamstype) {
  return (
    <button
      className={`${gradient} py-3 w-full ${classNames}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
function CVButton({ gradient, label, onClick, icon }: ButtonParamstype) {
  return (
    <button className={`${gradient}  py-1 px-1 w-full`} onClick={onClick}>
      <div
        className="hover:bg-slate-800  bg-black text-white 
      px-5 py-2 w-full flex items-center justify-center"
      >
        {icon}
        <span className="ml-2"> {label}</span>
      </div>
    </button>
  );
}
