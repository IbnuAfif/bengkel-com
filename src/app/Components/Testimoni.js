import Image from "next/image";

const Testimoni = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-2xl">What Other Say About Us</h2>
        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          {/* Quote Start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">“ Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”</div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shadow-xl md:h-14 md:w-14">
                <Image src="/user.jpg" width={100} height={100} alt="user photo" loading="lazy" />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Suratno Djaja</div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">Pelanggan</p>
              </div>
            </div>
          </div>
          {/* Quote End */}

          {/* Quote Start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">“ Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”</div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shadow-xl md:h-14 md:w-14">
                <Image src="/user.jpg" width={100} height={100} alt="user photo" loading="lazy" />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Suratno Djaja</div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">Pelanggan</p>
              </div>
            </div>
          </div>
          {/* Quote End */}

          {/* Quote Start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">“ Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”</div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shadow-xl md:h-14 md:w-14">
                <Image src="/user.jpg" width={100} height={100} alt="user photo" loading="lazy" />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Suratno Djaja</div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">Pelanggan</p>
              </div>
            </div>
          </div>
          {/* Quote End */}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
