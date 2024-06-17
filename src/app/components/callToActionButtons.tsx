import React from "react";

function CallToAction() {
  return (
    <div className="flex justify-center space-x-4 items-center mt-8">
      <a href="#" className="py-2 px-3 border rounded-md">
        Contact Us
      </a>
      <a
        href="#"
        className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
      >
        Order Now
      </a>
    </div>
  );
}

export default CallToAction;
