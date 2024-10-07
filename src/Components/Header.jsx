import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import NumberOfItem from "./NumberOfItem";
//  #A1BE95, #F98866

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const color1 = "#A1BE95";
  const color2 = "#F98866";
  const color3 = "#E2EF70";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" border-gray-200 dark:bg-white-900 border-b-[1px]">
      <div className="w-[100%] flex items-center justify-between mx-auto p-0">
        {" "}
        {/* Reduced padding */}
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/images/bg2.png" className="h-24  sm:ml-10" alt="Logo" />{" "}
          {/* Reduced logo height */}
        </a>
        {/* <div className="flex md:order-2">
          <button
            type="button"
            onClick={toggleMenu}
            aria-controls="navbar-search"
            aria-expanded={menuOpen}
            className={`md:hidden outline-none text-color4 hover:bg-violet-100 focus:outline-none dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1`}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <span className="sr-only">Open main menu</span>
          </button>
        </div> */}
        <div className="hidden md:flex h-[100%]">
          <ul className="hidden md:flex flex-row gap-3 items-center h-[100%]">
            {/* <a className="text-gray-800 hover:text-gray-500 cursor-pointer">
            <CgProfile size={30} />
          </a> */}
            <a>
              <video
                src="/images/Profile.mp4"
                className="h-10 w-10 cursor-pointer"
                muted
                preload="auto"
                onMouseEnter={(e) => {
                  e.target.currentTime = 0; // Reset the video to the start
                  e.target.play(); // Play the video
                }}
                onMouseLeave={(e) => e.target.pause()} // Pause the video when hover is removed
              />
            </a>

            <a className="relative cursor-pointer">
              <video
                src="/images/Cart.mp4" // Use this relative path from the `public` folder
                className="h-14 w-14"
                muted
                onMouseEnter={(e) => {
                  e.target.currentTime = 0; // Reset the video to the start
                  e.target.play(); // Play the video
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
              <NumberOfItem />
            </a>
          </ul>
        </div>
        <div
          className={`${
            menuOpen ? "block w-full md:w-auto" : "hidden w-0"
          } items-center justify-between  md:flex  md:order-1 shadow-lg bg-gray-100`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <div className="flex flex-row">
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-800 ring-gray-300 rounded-l-md bg-gray-50 ring-1 focus:ring-gray-700 outline-none transition-all 1s"
                placeholder="Search..."
              />
              <button className="px-3 border-r-0 hover:bg-red-200 transition-all ease-in 2s text-gray-700 border-gray-300 ">
                Search
              </button>
            </div>
          </div>
          <ul className="flex flex-col md:hidden p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
