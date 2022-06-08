import React from "react";
import Banner1 from "../components/banner1/Banner1";
import Slider from "../components/homeSlider/Slider";
import Inter from "../components/inter/Inter";
import Out from "../components/out/Out";
import Service from "../components/services/Service";
import Software from "../components/software/Software";

const Hompage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Slider />
      <div className="parent">
        <div className="mxWidth">
          <Banner1 />
          <Service />
          <Inter />
          <Software />
          <Out />
        </div>
      </div>
    </>
  );
};

export default Hompage;
