import Image from "next/image";

const Testimoni = () => {
  return (
    <div className="bg-gray-100 py-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What Other Say About Us</h2>
        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          {/* Quote Start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">
              “Pelayanan dari jasa perbaikan kendaraan ini luar biasa! Mereka tidak hanya cepat menemukan masalah pada mobil saya, tetapi juga memberikan solusi yang sangat efektif. Saya sangat puas dengan hasilnya.”
            </div>
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
            <div className="text-center text-gray-600">
              “ Saya sudah menggunakan jasa perbaikan kendaraan ini beberapa kali dan saya tidak pernah kecewa. Mekaniknya sangat ahli dan profesional, harga yang mereka tawarkan juga sangat terjangkau. Sangat direkomendasikan!”
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shadow-xl md:h-14 md:w-14">
                <Image src="/user2.jpg" width={100} height={100} alt="user photo" loading="lazy" />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Budi Hartanto</div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">Pelanggan</p>
              </div>
            </div>
          </div>
          {/* Quote End */}

          {/* Quote Start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">
              “Pertama kali mencoba jasa perbaikan kendaraan ini karena rekomendasi dari teman, dan saya benar-benar senang dengan layanannya. Mereka sangat ramah, teliti dalam melakukan perbaikan, dan mobil saya kembali berjalan seperti
              baru setelah diperbaiki.”
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shadow-xl md:h-14 md:w-14">
                <Image src="/user3.jpg" width={100} height={100} alt="user photo" loading="lazy" />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Bagus Widjaja</div>
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
