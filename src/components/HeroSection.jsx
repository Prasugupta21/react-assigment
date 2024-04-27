import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
const HeroSection = () => {

  return (
    <div className='flex px-2  mt-6  flex-wrap items-center mx-auto p-4 md:px-36 '>

     <MdOutlineHome className='mx-.5 text-[#696671] text-3xl' />
     <FaGreaterThan className='text-xs mt-[.55rem] md:mx-[.2rem] text-[#06286E] ' />
     <p className='md:mx-[.2rem] mt-[.25rem] text-[rgb(105,102,113)]' >Fleshcard</p>
     <FaGreaterThan className='text-xs mt-[.55rem] mx-[.2rem] text-[#06286E]  ' />

     <p className='md:mx-[.2rem] sm:mx-0 mt-[.25rem]  text-[#696671]'>Mathematics</p>
     <FaGreaterThan className='text-xs mt-[.55rem] mx-[.2rem] text-[#06286E] ' />

      <p className='md:mx-[.2rem] text-[#06286E] mt-[.25rem] font-bold  '>Relation and Function</p>
    </div>
  )
}

export default HeroSection;