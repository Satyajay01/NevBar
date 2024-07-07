import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { IoHomeOutline } from "react-icons/io5";
import { RiFileInfoLine } from "react-icons/ri";
import { PiBookBookmark } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { TbBrandBlogger } from "react-icons/tb";

function NavBar() {
  const [NewBar_anima, setNewBar_anima] = useState("");
  function NewBar_open() {
    setNewBar_anima("transform translate-x-full");
  }
  function NewBar_close() {
    setNewBar_anima("");
  }

  return (
    <>
      {/* ---------------------Small Devices---------------------- */}
      <div className="fixed md:hidden w-full flex justify-between px-4 py-2 shadow-2xl items-center bg-transparent backdrop-blur-[3px] ">
        <button onClick={NewBar_open} className="text-[#20bb2f] p-2 border-2 border-[#20bb2f] rounded-xl"><RiMenu2Line /></button>
        <span className="text-4xl font-bold text-[#20bb2f]">Logo</span>
        <div className="flex gap-2 ">
        <button className="text-[#20bb2f] p-2 text-2xl"><FaMagnifyingGlass /></button>
        <button className="text-[#20bb2f] p-2 text-2xl"><AiOutlineShoppingCart /></button>

        </div>
      </div>

      <div
        className={` fixed flex bg-[#2f2f3048] w-full h-screen top-0 left-[-100%] ${NewBar_anima} transition-all duration-300 ease-in-out`}
      >
        <div className="w-4/5 bg-white h-screen">
          {/* --------------- */}

          <div className=" border-2 h-28">
            <h1 className="font-bold text-4xl p-2 text-[#20bb2f]">Logo</h1>

            <div className="relative left-40">
              <button className="text-xl">
                Sign in !<i className="fa-regular fa-user cursor-pointer"></i>
              </button>
            </div>
          </div>

          <div>
          <ul>
            <li className="p-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900"><a href="#home" className="flex items-center gap-2"><IoHomeOutline />HOME</a></li>
            <li className="p-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900"><a href="#about-us" className="flex items-center gap-2" ><RiFileInfoLine />ABOUT US</a></li>
            <li className="p-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900"><a href="#courses" className="flex items-center gap-2"><PiBookBookmark />COURSES</a></li>
            <li className="p-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900"><a href="#internship" className="flex items-center gap-2"><TbCertificate />INTERNSHIP</a></li>
            <li className="p-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900"><a href="#contact-us" className="flex items-center gap-2"><IoCallOutline />CONTACT US</a></li>
            <li className="p-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900"><a href="#gallery" className="flex items-center gap-2"><GrGallery />GALLERY</a></li>
            <li className="p-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900"><a href="#blog" className="flex items-center gap-2"><TbBrandBlogger />BLOG</a></li>
          </ul>
          </div>
          {/* -------------------*/}
        </div>
        <div
          onClick={NewBar_close}
          className=" bg-[rgba(0,0,0,0.61)] w-1/4 h-screen "
        >
          <h1 className="text-white text-xl p-8">
            <TfiClose />
          </h1>
        </div>
      </div>
      {/* ---------------------Small Devices---------------------- */}

      {/* ----------------------Medium devices--------------------------- */}
    <div className="p-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-4xl font-bold text-[#20bb2f]">Logo</div>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Home</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">About Us</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Courses</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Internship</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Contact Us</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Gallery</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Blog</a>
        </div>
      </div>
    </div>

      {/* ----------------------Medium devices--------------------------- */}
    </>
  );
}

export default NavBar;
