import { FaClipboardList } from "react-icons/fa6";
import Image from "next/image";

const Services = () => {
  const items = [
    {
      icon: <Image src="/gear.png" width={50} height={50} alt="" />,
      title: "Perawatan Rutin Kendaraan",
      desc: "Layanan perawatan berkala yang mencakup penggantian oli, filter udara, dan cek komponen penting lainnya untuk menjaga performa optimal kendaraan.",
    },
    {
      icon: <Image src="/piston.png" width={50} height={50} alt="" />,
      title: "Perbaikan Mesin",
      desc: "Diagnosis, perbaikan, dan penggantian komponen mesin yang rusak atau mengalami masalah untuk memastikan kendaraan beroperasi dengan baik.",
    },
    {
      icon: <Image src="/rem.png" width={50} height={50} alt="" />,
      title: "Servis Rem",
      desc: "Pengecekan, perbaikan, dan penggantian sistem rem kendaraan guna memastikan fungsi optimal demi keamanan pengendara.",
    },
    {
      icon: <Image src="/suspensi.png" width={50} height={50} alt="" />,
      title: "Sistem Suspensi",
      desc: "Pemeriksaan, perbaikan, dan penggantian bagian suspensi yang rusak atau aus untuk kenyamanan dan kestabilan saat berkendara.",
    },
    {
      icon: <Image src="/ac.png" width={50} height={50} alt="" />,
      title: "Servis Sistem Pendingin",
      desc: "Perawatan dan perbaikan pada sistem pendinginan, termasuk pemeriksaan radiator, kipas, dan cairan pendingin untuk mencegah overheating.",
    },
    {
      icon: <Image src="/electric-meter.png" width={50} height={50} alt="" />,
      title: "Pemasangan dan Perbaikan Kelistrikan",
      desc: "Instalasi, perbaikan, dan penggantian komponen kelistrikan seperti aki, alternator, atau kabel-kabel yang rusak.",
    },
    {
      icon: <Image src="/fuel.png" width={50} height={50} alt="" />,
      title: "Servis Sistem Bahan Bakar",
      desc: "Perawatan dan perbaikan pada sistem bahan bakar, termasuk injektor, pompa bahan bakar, atau karburator untuk efisiensi kendaraan.",
    },
    {
      icon: <Image src="/aksesoris.png" width={50} height={50} alt="" />,
      title: "Pemasangan dan Perbaikan Aksesori",
      desc: "Instalasi atau perbaikan aksesori seperti lampu tambahan, sistem audio, atau fitur tambahan lainnya sesuai permintaan pelanggan.",
    },
    {
      icon: <Image src="/transmisi.png" width={50} height={50} alt="" />,
      title: "Perbaikan Sistem Transmisi",
      desc: "Diagnosis dan perbaikan pada sistem transmisi otomatis atau manual untuk menjaga performa dan keandalan perpindahan gigi.",
    },
    {
      icon: <Image src="/tire.png" width={50} height={50} alt="" />,
      title: "Servis Ban dan Roda",
      desc: "Pengecekan, penyetelan tekanan ban, rotasi, perbaikan, dan pemasangan ban baru untuk keamanan dan kinerja optimal saat berkendara.",
    },
  ];
  return (
    <section className="py-8 mx-4">
      <div className="max-w-screen-xl mx-auto sm:text-center bg-gray-100 m-4 pt-4 pb-4 rounded-lg">
        <div className="relative  mx-4">
          <div className="relative z-10">
            <h3 className="text-gray-900 text-3xl font-semibold sm:text-4xl">Ayo, Perbaiki Sekarang, Hindari Masalah di Jalan!</h3>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.</p>
          </div>
          <div></div>
          <div className="relative mt-12 text-left">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <li key={i} className="bg-white space-y-3 p-4 border rounded-lg">
                  <div className="text-cyan-700 py-2 text-xl">{item.icon}</div>
                  <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
