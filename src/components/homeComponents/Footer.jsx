import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#C5BFED] pt-10 px-6">
      <div className="bg-[#322B5E] text-white rounded-t-4xl py-14 px-20">
        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1 - Company */}
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-xl">Company</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="hover:text-[#9F95E1] cursor-pointer">About Us</li>
              <li className="hover:text-[#9F95E1] cursor-pointer">Careers</li>
              <li className="hover:text-[#9F95E1] cursor-pointer">Plan</li>
              <li className="hover:text-[#9F95E1] cursor-pointer">Blog</li>
              <li className="hover:text-[#9F95E1] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 2 - Features */}
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-xl">Features</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="hover:text-[#9F95E1] cursor-pointer">
                Coaching Career
              </li>
              <li className="hover:text-[#9F95E1] cursor-pointer">
                Video Learning
              </li>
              <li className="hover:text-[#9F95E1] cursor-pointer">
                Unlimited Courses
              </li>
              <li className="hover:text-[#9F95E1] cursor-pointer">
                1on1 Session with Expert
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-xl">Contact</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li>hello@moklearn.com</li>
              <li>+1 227 373 22388</li>
              <li>+1 227 373 22388</li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-xl">20% Discount for Sign Up</h2>
            <p className="text-sm">
              Subscribe to get our latest updates and offers.
            </p>

            {/* Email Input */}
            <div className="flex gap-2 mt-2 border rounded-full px-2 py-1 bg-white text-sm  ">
              <input
                type="email"
                placeholder="Email Address"
                className=" text-black outline-none w-full"
              />
              <button className="bg-[#9F95E1]  h-8 w-24 rounded-full font-semibold hover:bg-[#8A7ED3] text-xs">
                Sign Up
              </button>
            </div>

            {/* Country Dropdown with Flags */}
            <div className="mt-4">
              <select className=" text-sm">
                <option value="us"> United States</option>
                <option value="np"> Nepal</option>
                <option value="uk"> United Kingdom</option>
                <option value="in"> India</option>
                <option value="ca">Canada</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-400 pt-6 gap-4 text-sm">
          <h3 className="font-semibold">MokLearn</h3>
          <p>MokLearn © All Rights Reserved.</p>
          <div className="flex gap-4">
            <p className="hover:text-[#9F95E1] cursor-pointer">Team</p>
            <p className="hover:text-[#9F95E1] cursor-pointer">Policy</p>
            <p className="hover:text-[#9F95E1] cursor-pointer">Security</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
