import React from "react";

function Testimonial() {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 py-2 px-4">
      <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
        <p className="">
          Lorem Ipsum is dummy text used in printing and typesetting industry
          since the 1500s. Learn about its origin, variations, translations and
          how to generate it online.
        </p>
        <div className="mt-8 flex items-start">
          <img
            src="/assets/images/smile.jpeg"
            alt="Testimonial"
            className="w-12 rounded-full h-12 mr-6 border border-neutral-300"
          />
          <div>
            <h6>Jane Doe</h6>
            <span className="text-sm font-normal italic text-neutra-600">
              MaryLand,California
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
