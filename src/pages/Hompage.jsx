import Banner1 from "../components/banner1/Banner1";
import Slider from "../components/homeSlider/Slider";
import Inter from "../components/inter/Inter";
import Out from "../components/out/Out";
import Service from "../components/services/Service";

const Hompage = () => {
  return (
    <div className="parent">
      <div className="mxWidth">
        <Slider />
        <Banner1 />
        <Service />
        <Inter />
        <Out />
      </div>
    </div>
  );
};

export default Hompage;
