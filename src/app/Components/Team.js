import Image from "next/image";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";

const TeamCard = ({ firstName, lastName, imageProfile, tugas }) => {
  return (
    <div className="">
      {/* Person Start */}
      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-6">
        <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
          <Image src={imageProfile} width={500} height={500} alt="user sjsdsd" />
        </div>
        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg">
            {firstName} {lastName}
          </div>
          <div>
            <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{tugas}</p>
          </div>

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
  );
};

export default TeamCard;
