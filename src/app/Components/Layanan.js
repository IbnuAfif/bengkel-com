import { FaCogs, FaOilCan, FaStore } from "react-icons/fa";
import { GiBreakingChain } from "react-icons/gi";
import { GiFlatTire } from "react-icons/gi";
import { MdOutlineElectricCar } from "react-icons/md";

const Layanan = () => {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">Layanan Pemeliharaan Kendaraan dengan Presisi</h3>
          <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.</p>
        </div>

        <div className="grid gap-y-2 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Start Services */}
          <div className="mt-12">
            <div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gray-200 text-gray-800 rounded-full flex items-center justify-center">
                  <FaOilCan />
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">Ganti Oli</h4>
                <p>Jasa ganti oli kami memberikan layanan cepat dan efisien untuk memastikan mesin kendaraan Anda tetap beroperasi dengan baik.</p>
              </div>
            </div>
          </div>
          {/* End Services */}

          {/* Start Services */}
          <div className="mt-12">
            <div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gray-200 text-gray-800 rounded-full flex items-center justify-center">
                  <GiBreakingChain />
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">perbaikan Rantai</h4>
                <p>Kami menyediakan jasa perbaikan rantai yang profesional dan akurat, memperbaiki segala kerusakan dan masalah pada rantai.</p>
              </div>
            </div>
          </div>
          {/* End Services */}
          {/* Start Services */}
          <div className="mt-12">
            <div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gray-200 text-gray-800 rounded-full flex items-center justify-center">
                  <GiFlatTire />
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">perawatan Ban dan Roda</h4>
                <p>Kami memberikan layanan perawatan ban, termasuk pengecekan tekanan udara, penyetelan keseimbangan, serta pemeriksaan dan perbaikan pada kondisi ban.</p>
              </div>
            </div>
          </div>
          {/* End Services */}
          {/* Start Services */}
          <div className="mt-12">
            <div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gray-200 text-gray-800 rounded-full flex items-center justify-center">
                  <MdOutlineElectricCar />
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">Kelistrikan</h4>
                <p>Menyediakan pengecekan dan perbaikan pada sistem kelistrikan, termasuk baterai, sistem pengapian, dan perangkat elektronik lainnya.</p>
              </div>
            </div>
          </div>
          {/* End Services */}
          {/* Start Services */}
          <div className="mt-12">
            <div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gray-200 text-gray-800 rounded-full flex items-center justify-center">
                  <FaCogs />
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">Maintenance</h4>
                <p>Kami menyediakan layanan pengecekan rutin serta perawatan berkala untuk memastikan kendaraan Anda berfungsi optimal.</p>
              </div>
            </div>
          </div>
          {/* End Services */}
          {/* Start Services */}
          <div className="mt-12">
            <div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gray-200 text-gray-800 rounded-full flex items-center justify-center">
                  <FaStore />
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">Spare Parts</h4>
                <p>Kami menyediakan aksesori kendaraan serta suku cadang orisinal, memberikan opsi tambahan dan pembaruan bagi kendaraan Anda.</p>
              </div>
            </div>
          </div>
          {/* End Services */}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
