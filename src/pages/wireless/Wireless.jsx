import "./wireless.css";
import img from '../../assets/images/less.jpg'
import Inter from "../../components/inter/Inter";
import React from "react";

const Wireless = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="parent">
      <div className="mxWidt gh">
        <div className="wireless__container"></div>
        <div>
          <p style={{ color: "#1C0A00" }}>
            We provide wireless internet to businesses and Individuals to enable
            them achieve their best business and normal social operations
          </p>
          <div className="wire__love">
          <div className="wire__img">
            <img src={img} alt="wifi" />
          </div>
          <div className="wire__text">
            <p>
              This is our Internet service provision department aiming at
              provising Reliable Wireless internet to the whole country,
              creating a world where Internet is not limited to Data Bundles,
              availing internet to everyone in all areas of uganda, in all Homes
            </p>
            <p>
              We strictly offer wireless internet services, unlimited with no
              limitation to internet bundles, we only charge mbps.
            </p>
          </div>
        </div>
        </div>
        <Inter />
      </div>
    </div>
  );
};

export default Wireless;
