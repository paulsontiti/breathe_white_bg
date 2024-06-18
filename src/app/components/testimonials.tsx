import React from "react";
import Testimonial from "./testimonial";

function Testimonials() {
  return (
    <div className="mt-20 tracking-wide">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h1>
      <div className="flex flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((test, i) => (
          <Testimonial key={i} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
