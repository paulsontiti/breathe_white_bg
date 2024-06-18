"use client";
import React from "react";
import { X, Menu } from "lucide-react";
import CallToAction from "./callToActionButtons";
function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800 ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <h3 className="mr-2">Logo</h3>
            <span className="text-xl tracking-tight bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
              Breathe
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-4 items-center">
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
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleDrawerOpen}>
              {drawerOpen ? (
                <X className="text-orange-500" />
              ) : (
                <Menu className="text-orange-500" />
              )}
            </button>
            {drawerOpen}
          </div>
        </div>
        {drawerOpen && (
          <div
            className="fixed right-0 -20 bg-neutral-900 w-full p-12
        flex flex-col justify-center items-center lg:hidden"
          >
            <ul className=" space-y-8">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
            <CallToAction />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
