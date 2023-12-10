"use client";
import Link from "next/link";
import { CiMenuFries, CiSquareRemove } from "react-icons/ci";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="bg-[#F7F7F7] fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="text-gray-900 font-bold">
          {/* <span className="font-bold font-medium">&#47;</span>
          <span className="font-bold font-medium">&#47;</span>
          <span className="font-bold font-medium">&#47;</span> */}
          <span className="">BENGKEL.COM</span>
        </Link>

        {/* Start Memunculkan Tombol Menu di Navbar saat mode mobile -Menu- */}
        <div className="items-center">
          <button type="button" className="inline-flex items-center w-10 justify-center p-1  rounded-sm md:hidden hover:bg-gray-700 hover:bg-opacity-50 " onClick={() => setNavbar(!navbar)}>
            <span className="">{navbar ? <CiSquareRemove className="text-black text-xl " /> : <CiMenuFries className="text-black text-xl " />}</span>
          </button>
        </div>
        {/* End Memunculkan Tombol Menu di Navbar saat mode mobile -Menu- */}

        {/* Start Items Navbar saat mode layar medium dan fullscreen -About Us - Services - Teams - Contacts- */}
        <div id="burger-item" className={`items-center justify-center w-full md:flex md:w-auto md:order-1 ${navbar ? " p-2 flex md:p-0 block" : "hidden"}`}>
          <ul className="flex flex-col p-2 md:p-0 mt-2 font-medium items-center border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link href="/About" onClick={() => setNavbar(!navbar)} className="block px-2 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/Services" onClick={() => setNavbar(!navbar)} className="block px-2 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                Services
              </Link>
            </li>
            <li>
              <Link href="/Teams" onClick={() => setNavbar(!navbar)} className="block px-2 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                Teams
              </Link>
            </li>
          </ul>
        </div>
        {/* End Items Navbar saat mode layar medium dan fullscreen -About Us - Services - Teams - Contacts- */}
      </div>
    </nav>
  );
};

export default Navbar;
