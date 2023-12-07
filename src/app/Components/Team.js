import Image from "next/image";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";

const TeamCard = () => {
  return (
    <div className="py-10 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Text Start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet Our Team</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 lg:text-2xl ">
            This is a section of some simplfe filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated
          </p>
        </div>
        {/* Text End */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {/* Person Start */}
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-6">
            <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <Image src="/user.jpg" width={500} height={500} alt="user sjsdsd" />
            </div>
            <div>
              <div className="text-center font-bold text-indigo-500 md:text-lg">John Chena</div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">CO Founder</p>

              {/* Social Media Start */}
              <div className="flex justify-center">
                <div className="flex gap-4">
                  <MdEmail className="text-gray-800 transition duration-100 hover:text-gray-500 active:text-gray-700" />
                  <MdPhoneAndroid className="text-gray-800 transition duration-100 hover:text-gray-500 active:text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
