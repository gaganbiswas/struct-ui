import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed top-0">
      <div className="px-4 py-2 w-full flex items-center justify-between">
        <span className="text-2xl font-bold">Recon</span>

        <nav>
          <a className="text-sm text-gray-200 underline decoration-gray-50/20">
            Github
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
