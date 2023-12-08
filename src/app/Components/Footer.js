import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col items-center border-t pt-6">
          {/* Link Start */}

          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link href="/About" className="text-gray-900 transition duration-100 hover:text-gray-300 active:text-gray-500 ">
              About
            </Link>
            <Link href="/Services" className="text-gray-900 transition duration-100 hover:text-gray-300 active:text-gray-500 ">
              Services
            </Link>
            <Link href="/Teams" className="text-gray-900 transition duration-100 hover:text-gray-300 active:text-gray-500 ">
              Teams
            </Link>
          </nav>

          {/* Link End */}

          {/* SosMed Start */}
          <div className="flex gap-4">
            <Link href="/" className="text-gray-500 transition duration-100 hover:text-gray-600 active:text-gray-800">
              <FaInstagram />
            </Link>
            <Link href="/" className="text-gray-500 transition duration-100 hover:text-gray-600 active:text-gray-800">
              <FaLinkedin />
            </Link>
            <Link href="/" className="text-gray-500 transition duration-100 hover:text-gray-600 active:text-gray-800">
              <FaGithub />
            </Link>
          </div>
          {/* SosMed End */}
        </div>
        <div className="py-8 text-center text-sm text-gray-500">© 2023 - Present By Bengkel.com</div>
      </footer>
    </div>
  );
};

export default Footer;
