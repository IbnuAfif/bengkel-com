import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white py-12 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-screen-md px-4 md:px-4">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:mb-6">Membangun dari Nol: Kehadiran Pertama Bengkel Kendaraan</h1>
        <p className="mb-6 text-gray-600 sm:text-lg md:mb-8 text-justify">
          Sejarah jasa servis perbaikan bengkel kendaraan mobil dan motor dimulai ketika kendaraan bermotor mulai menjadi bagian integral dalam kehidupan sehari-hari. Awalnya, pemilik kendaraan harus mengandalkan mekanik lokal yang terampil
          atau melakukan perbaikan sendiri karena belum ada bengkel khusus. Namun, seiring dengan berkembangnya industri otomotif, kebutuhan akan layanan perbaikan yang profesional meningkat. Hal ini mendorong munculnya bengkel spesialis
          yang menyediakan layanan perbaikan, pemeliharaan, dan perawatan kendaraan. Perkembangan teknologi otomotif serta kompleksitas mesin kendaraan juga mendorong bengkel untuk terus berkembang dan menyediakan layanan yang lebih canggih
          dan terampil, menjadi tempat yang tak hanya memperbaiki kendaraan, tetapi juga memberikan solusi komprehensif untuk kebutuhan pengguna kendaraan bermotor.
        </p>
        <h2 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl md:mb-4">Tentang Kami</h2>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8 text-justify">
          Perusahaan kami memiliki reputasi yang solid dalam jasa servis kendaraan motor dan mobil, dengan tim terampil yang terus menerus menghadirkan solusi perbaikan yang handal dan berkualitas. Kami menawarkan layanan yang komprehensif,
          mulai dari perawatan rutin hingga perbaikan yang kompleks, dengan fokus utama pada kepuasan pelanggan dan penggunaan teknologi terkini dalam industri otomotif. Dengan komitmen kuat terhadap kualitas, keandalan, dan pelayanan
          terbaik, kami berupaya menjadi mitra tepercaya bagi setiap kebutuhan kendaraan pelanggan kami.
        </p>

        <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
          <Image src="/bg-img.jpg" width={500} height={500} alt="Picture of Garage" className="h-full w-full object-cover object-center" />
        </div>
        <h2></h2>
        <p></p>
      </div>
    </div>
  );
};

export default About;
