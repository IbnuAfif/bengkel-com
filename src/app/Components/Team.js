"use client";

import { useEffect, useState } from "react";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import Image from "next/image";

const Teams = () => {
  const [TeamMembers, setTeamMembers] = useState([]);
  const jobTitles = ["Pemilik", "Manajer", "Team Leader", "Ahli Kelistrikan", "Administrasi", "Teknisi Senior", "Mekanik", "Mekanik"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?seed=24717254a1beeac5&gender=male&results=8&nat=us");
        const data = await response.json();
        console.log(data);
        setTeamMembers(data.results);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
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
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8">
              {/* <div className=""> */}
              {/* Person Start */}
              {TeamMembers.map((member, i) => (
                // <div key={i} className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8">
                <div key={i} className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-6">
                  <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                    <Image src={member.picture.large} width={500} height={500} alt="user sjsdsd" />
                  </div>
                  <div>
                    <div className="text-center font-bold text-indigo-500 md:text-lg">
                      {member.name.first} {member.name.last}
                    </div>
                    <div>
                      <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{jobTitles[i]}</p>
                    </div>
                    {/* Person End */}
                    {/* Social Media Start */}
                    <div className="flex justify-center">
                      <div className="flex gap-4">
                        <MdEmail className="text-gray-800 transition duration-100 hover:text-gray-500 active:text-gray-700" />
                        <MdPhoneAndroid className="text-gray-800 transition duration-100 hover:text-gray-500 active:text-gray-700" />
                      </div>
                    </div>
                  </div>
                </div>
                // </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Teams;
