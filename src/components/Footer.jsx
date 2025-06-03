import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-b border-gray-300 dark:bg-[#18191A] dark:border-[#18191A] select-none">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6">
        <div className="font-light text-sm text-center md:text-left text-gray-900 dark:text-[#B0B3B8]">
          ⓒ {year} Abhinav Shukla. Built with love and magic.
        </div>
        <div className="mb-2 md:mb-0">
          <p className="text-sm font-light text-gray-900 dark:text-[#B0B3B8]">
            complete code on{" "}
            <a
              href="https://github.com/ChefChilliSauce/PersonalLIW.git"
              className="text-[#4ade80] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
