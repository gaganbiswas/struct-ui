import { crimson } from "@/app/fonts";
import React from "react";

const Hero = ({ npmCode }: { npmCode: string }) => {
  return (
    <>
      <h1
        className={
          "text-[42px] leading-none sm:text-6xl font-medium text-gray-900"
        }
        style={crimson.style}
      >
        A set of 16x16
        <br />
        pixel-perfect icons
      </h1>
      <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-4">
        <a
          className="px-4 py-2.5 text-sm sm:text-base border rounded-md font-semibold bg-gray-900 border-gray-900 text-white flex items-center justify-center"
          href="https://github.com/gaganbiswas/struct-icons"
          rel="noopener noreferrer"
          target="_blank"
        >
          View on Github
        </a>
        <p className="px-4 py-2 border rounded-md text-base sm:text-lg font-mono bg-white border-gray-300 text-gray-900 flex items-center justify-center">
          {npmCode}
        </p>
      </div>
    </>
  );
};

export default Hero;
