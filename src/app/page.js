import Content from "./Components/Content";
import Hero from "./Components/Hero";
import Layanan from "./Components/Layanan";
import Testimoni from "./Components/Testimoni";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Content /> */}
      <Layanan />
      <Testimoni />
    </div>
  );
}
