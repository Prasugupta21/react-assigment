import React, { useState } from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import ReactCardFlip from "react-card-flip";
import { IoMdRefresh } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { MdFullscreen } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Faq from "./Faq";
const Body = () => {
  const [flip, setFlip] = useState(false);
  const frontContent = "9+6+7x-2x-3";
  const backContent = "5x+12";

  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <>
      <div className="flex  flex-col  mt-6  p-4 px-36 ">
        <h2 className="bg-gradient-to-bl  from-[#061C93]  to-[#1F80EB] font-extrabold text-transparent bg-clip-text md:text-3xl">
          Relations and Functions ( Mathematics )
        </h2>
        <div className="flex  mx-auto flex-col justify-start items-center md:justify-center ">
          <div className="flex   mt-8">
            <p className="mx-8 text-[#06286E] font-bold border-b-2 px-2 border-[#06286E]">
              Study
            </p>
            <p className="mx-8">Quiz</p>
            <p className="mx-8">Test</p>
            <p className="mx-8">Game</p>
            <p className="mx-8">Others</p>
          </div>
          <div className="flex mt-8 ">
            <ReactCardFlip isFlipped={flip} flipDirection="horizontal" containerStyle={{width:'100%'}}>
              
              <div
                className="flex bg-gradient-to-tr from-[#06286E] to-[#2284F1] border border-gray-200 rounded-3xl shadow h-64 w-[35rem] flex-col justify-center items-center"
                onClick={handleClick}
              >
                <div className="flex mt-[-6rem] justify-between w-full p-4">
                  <MdLightbulbOutline className="text-white text-2xl" />
                  <IoMdVolumeHigh className="text-white text-2xl" />
                </div>
                <div className="mt-16">
                  <h4 className="text-white flex text-3xl justify-center">
                    {frontContent}
                  </h4>
                </div>
              </div>

            
              <div
                className="flex flex-col bg-gradient-to-bl from-[#164EC0] to-[#06286E] border border-gray-200 rounded-3xl shadow h-64 w-[35rem] justify-center items-center"
                onClick={handleClick}
              >
                <div className="flex mt-[-10rem] justify-between w-full p-4">
                  <MdLightbulbOutline className="text-white text-2xl" />
                  <IoMdVolumeHigh className="text-white text-2xl" />
                </div>
                <h4 className="text-white text-3xl flex justify-center">
                  {backContent}
                </h4>
              </div>
            </ReactCardFlip>
          </div>

          <div className="mt-8 flex justify-evenly gap-32 w-full">
            <div>
              <IoMdRefresh className=" text-2xl" />
            </div>
            <div className=" flex">
              <Link className="flex justify-center  mt-[-.75rem] items-center w-10 h-10   text-blue-600 rounded-full  bg-gradient-to-r from-[#CCCCCC] to-[#164EC0]">
                <button className=" ">
                  <div>
                    {" "}
                    <FaLessThan className="text-white mx-8 " />
                  </div>
                </button>
              </Link>
              <h4 className="mx-4 text-[#202B37] font-bold mt-[-.2rem]">
                01/10
              </h4>
              <Link className="flex justify-center   mt-[-.75rem]  items-center w-10 h-10   text-blue-600 rounded-full  bg-gradient-to-r from-[#CCCCCC] to-[#164EC0]">
                <button className=" ">
                  <div>
                    <FaGreaterThan className="text-white mx-4 " />{" "}
                  </div>
                </button>
              </Link>
            </div>

            <div>
              <MdFullscreen className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex    justify-between mt-16 w-full md:px-20  ">
        <div className="flex  px-12  items-center">
          <div className="flex   justify-center items-center w-12 h-12 rounded-full border-2 shadow-iiner">
            <img src="../../images/logo.png" className="h-6" alt="Logo" />
          </div>
          <div className="flex flex-col px-3 ">
            <p className="mt-[-.3rem] text-[.75rem]">Published by</p>
            <span className="self-center mt-[-.3rem] text-[#06286E] text-2xl font-semibold whitespace-nowrap dark:text-white">
              Hygge<span className="font-extrabold ml-[-.1rem]">X</span>
            </span>
          </div>
        </div>
        <div className=" flex px-12 items-center ">
          <div className="flex justify-center   items-center w-10 h-10   text-blue-600 rounded-full  bg-gradient-to-b from-[#06286E] to-[#164EC0]">
            <FaPlus className="text-white  " />
          </div>
          <div className="flex px-3 ">
            <h3 className="flex  mt-[-.25rem] font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text">
              Create Flashcard
            </h3>
          </div>
        </div>
     
      </div>
      <Faq/>
      
    </>
  );
};

export default Body;
