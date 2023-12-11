import Image from "next/image";

const Partners = () => {
  const ourPartners = [
    { image: <Image src="/Shell.jpg" width={150} height={100} alt="..." loading="lazy" /> },
    { image: <Image src="/MotoGp.png" width={100} height={100} alt="..." loading="lazy" /> },
    { image: <Image src="/Pertamina.png" width={120} height={100} alt="..." loading="lazy" /> },
    { image: <Image src="/Vale.jpg" width={150} height={100} alt="..." loading="lazy" /> },
  ];
  return (
    <section className="p-6 bg-white text-gray-800">
      <div className="container p-4 mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Partners</h2>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto text-gray-600">
        {ourPartners.map((logo, i) => (
          <div key={i} className="flex justify-center w-1/2 p-1 align-middle md:w-1/3 xl:w-1/4">
            {logo.image}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
