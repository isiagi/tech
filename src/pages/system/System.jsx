import img from "../../assets/images/sales.jpg";
import img1 from "../../assets/images/salex.jpg";
import img2 from "../../assets/images/slaes.jpg";
import "./system.css";

const System = () => {
  return (
    <div className="parent">
      <div className="mxWidt bg">
        <div className="soft__container"></div>
        <div className="soft__section">
          <h2>Computer system sales and maintenance</h2>
          <div className="ye__grid">
            <div style={{ position: "relative", width: "81%" }}>
              <div className="ye__photo__grid">
                <img src={img} alt="" className="soft__im" />
                <img src={img1} alt="" className="soft__imx" />
              </div>
              <div className="ye__photo__gri">
                <div className="ye__photo__gri__span"></div>
                <img src={img2} alt="" className="soft__imj" />
              </div>
            </div>
            <div>
              <h1>Computer system sales maintenance</h1>
            </div>
          </div>
          <h4>Loading ... </h4>
        </div>
      </div>
    </div>
  );
};

export default System;
