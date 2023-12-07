import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#F7F7F7] fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="text-gray-900">
          {/* <span className="font-bold font-medium">&#47;</span>
          <span className="font-bold font-medium">&#47;</span>
          <span className="font-bold font-medium">&#47;</span> */}
          <span className="">BENGKEL.CO</span>
        </Link>

        {/* Start Items Navbar saat mode layar medium dan fullscreen -About Us - Services - Teams - Contacts- */}
        <div id="burger-item" className="hidden items-center justify-between w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-2 md:p-0 mt-2 font-medium border-gray-100 rounded-lg bg-gray-100 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link href="/About" className="block px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/Services" className="block px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                Services
              </Link>
            </li>
            <li>
              <Link href="/Teams" className="block px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                Teams
              </Link>
            </li>
            <li>
              <Link href="/Contacts" className="block px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        {/* End Items Navbar saat mode layar medium dan fullscreen -About Us - Services - Teams - Contacts- */}

        {/* Start Memunculkan Tombol Menu di Navbar saat mode mobile -Menu- */}
        <div className="items-center">
          <button data="burger-item" type="button" className="inline-flex items-center w-10 justify-center  rounded-md md:hidden hover:bg-gray-700 hover:bg-opacity-50 ">
            <span className="">
              <CiMenuFries className="text-white text-xl " />
            </span>
          </button>
        </div>
        {/* End Memunculkan Tombol Menu di Navbar saat mode mobile -Menu- */}
      </div>
    </nav>
  );
};

export default Navbar;
