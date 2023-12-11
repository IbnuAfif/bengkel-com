const Timeline = () => {
  const mileSrones = [
    {
      item: "Berdiri dan Pertumbuhan Awal",
      tahun: "2010",
      rincian: "Pendirian perusahaan, pembangunan basis pelanggan, pengembangan layanan dasar, dan pembentukan tim yang terampil",
    },
    { item: "Perluasan Layanan dan Infrastruktur", tahun: "2013", rincian: "Penambahan layanan tambahan, pengembangan fasilitas fisik, penyebaran wilayah layanan, dan peningkatan kepuasan pelanggan." },
    {
      item: "Inovasi dan Teknologi",
      tahun: "2015",
      rincian: "Penyempurnaan operasional dengan adopsi teknologi terbaru untuk efisiensi dan kualitas layanan yang lebih baik.",
    },
    {
      item: "Kemitraan Strategis dan Diversifikasi",
      tahun: "2017",
      rincian: "Membangun kemitraan strategis dengan merek kendaraan atau penyedia layanan lain, serta diversifikasi pendapatan dengan penawaran layanan tambahan yang menarik",
    },
    {
      item: "Ekspansi dan Internasionalisasi",
      tahun: "2019",
      rincian: "Perluasan lebih lanjut ke wilayah baru atau bahkan masuk ke pasar internasional.",
    },
    {
      item: "Ketangguhan Bisnis dan Keberlanjutan",
      tahun: "2021",
      rincian: "Fokus pada keberlanjutan dengan praktik ramah lingkungan, investasi dalam energi terbarukan, dan pengembangan strategi bisnis yang tangguh untuk masa depan.",
    },
  ];
  return (
    <div className="bg-gray-100 text-gray-800 py-6">
      <div className="ontainer max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-gray-700">
              <h3 className="text-3xl font-semibold">Sejarah Berdiri</h3>
              <span className="text-sm font-bold tracki uppercase text-gray-600">serta Milestone Perusahaan </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              {mileSrones.map((items, i) => (
                <div key={i} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-gray-600">
                  <h3 className="text-xl font-semibold tracki">{items.item}</h3>
                  <time className="text-xs tracki uppercase text-gray-600">{items.tahun}</time>
                  <p className="mt-3">{items.rincian}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
