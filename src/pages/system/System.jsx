import img from "../../assets/images/sot1.jpg";
import "./system.css";

const System = () => {
  return (
    <div className="parent">
      <div className="mxWidt bg">
      <div className="soft__container"></div>
      <div className="soft__section">
        <h2>Computer system sales and maintenance</h2>
        <div className="ye__grid">
            <img src={img} alt="" className="soft__img" />
            <div>
              <h1>
                Are you wondering why you would want to invest in custom
                software development?
              </h1>
              <p>
                Scalability is one of the most important advantages of
                customized software. By developing custom solutions,
                organizations can modify or add to their capacity as they
                expand. The software is designed with specific infrastructure,
                branding, and implementation needs in mind.{" "}
              </p>
            </div>
          </div>
          <h4>Loading ... </h4>
      </div>
      </div>
    </div>
  );
};

export default System;
