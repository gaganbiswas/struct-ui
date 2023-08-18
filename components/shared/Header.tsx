"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setScroll(window.scrollY > 10));
    }
  }, []);

  return (
    <header
      className={`w-full fixed top-0 transition-all z-50 ${
        isScroll ? "bg-white border-b border-gray-300" : ""
      }`}
    >
      <div className="px-4 py-3 w-full flex items-center justify-between">
        <div className="flex items-center font-bold gap-2">
          <Image
            src={"/struct-ui.svg"}
            alt="Struct UI"
            priority
            width={36}
            height={36}
          />
          <span className="text-xl select-none">StructUI</span>
        </div>

        <nav>
          <a
            className="text-sm text-gray-800 underline decoration-gray-300"
            href="https://github.com/gaganbiswas/struct-icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
