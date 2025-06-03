import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-b border-gray-300 select-none">
      <div className="flex justify-between items-center px-8 py-6">
        <div className="font-light text-sm">
          ⓒ {year} Abhinav Shukla. Built with love and magic.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
