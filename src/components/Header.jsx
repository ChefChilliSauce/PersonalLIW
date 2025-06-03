import React from "react";

function Header() {
  return (
    <header className="bg-gray-100 border-b border-gray-300">
      <div className="flex justify-between items-center px-8 py-6">
        <div className="font-medium text-lg select-none">Abhinav Shukla</div>
        {/* <nav className="flex space-x-8 font-semibold">
          <a href="#home" className="hover:underline">
            /Home
          </a>
          <a href="#about" className="hover:underline">
            /About
          </a>
          <a href="#projects" className="hover:underline">
            /Projects
          </a>
          <a href="#contact" className="hover:underline">
            /Contact
          </a>
        </nav> */}
      </div>
    </header>
  );
}

export default Header;
