import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-white mt-6 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
         
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../../images/logo.png"
              className="h-8"
              alt=" Logo"
            />
            <span className="self-center mt-[-.7rem]  text-[#06286E] text-4xl font-semibold whitespace-nowrap dark:text-white">
            Hygge<span className="font-extrabold ml-[-.1rem]">X</span>
            
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium md:text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={'#'}
                  className="block mx-7 py-2 px-3 text-[#3A3740] hover:text-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={'#'}
                  className="block mx-7 py-2 px-3 text-[#3A3740] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Flashcard
                </Link>
              </li>
             
              <li>
                <Link
                  to={'#'}
                  className="block mx-7 py-2 px-3 text-[#3A3740] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
              <li  >
                <Link
                  to={'#'}
                  className="block mx-7 text-[#3A3740] py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Faq
                </Link>
              </li>
              
             
               
              <button type="button" className="text-white    bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-gradient-to-b from-[#06286E] to-[#164EC0] font-medium rounded-full w-28 text-sm px-5 py-3 text-center mt-[-.60rem] dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              <Link  to={''}>
                Login 
                </Link>
              </button>
            </ul>
           
          </div>
        </div>
      </nav>
      
      
    </div>
  );
};

export default Header;
