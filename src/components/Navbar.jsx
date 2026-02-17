import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import SectionContainer from "./SectionContainer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <SectionContainer>
      <nav className="w-full bg-[#322B5E] shadow-md rounded-full mt-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-10 h-10 object-contain" />
            <h1 className="text-xl font-bold  ">moklearn</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm ">
            <a href="#" className="hover:text-blue-600 transition">
              Flash Sale
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Class
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Roadmap
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Plan
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-3 text-sm bg-[#9F95E1] rounded-full w-36 hover:bg-[#8f83de] transition">
              Login
            </button>
            <button
              className="px-4 py-3 bg-white text-[#9F95E1] text-sm rounded-full w-36 hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-md">
            <a href="#" className="block">
              Flash Sale
            </a>
            <a href="#" className="block">
              Class
            </a>
            <a href="#" className="block">
              Roadmap
            </a>
            <a href="#" className="block">
              Plan
            </a>

            <div className="flex flex-col gap-3 pt-3">
              <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </SectionContainer>
  );
};

export default Navbar;
