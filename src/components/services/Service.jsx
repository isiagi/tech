import img from "../../assets/images/target.png";
import "./service.css";

const Service = () => {
  return (
    <div className="service__container">
      <div className="service__wrapper">
        <h2>What We Offer</h2>
        {/* <p>We offer a variety of services for you and your business.</p> */}
      </div>
      <div className="service__grid">
        <div className="service__main">
          <div className="service__content">
            <div className="service__img">
              <img src={img} alt="" />
            </div>
            <h4>Domain Services</h4>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              a voluptate odio accusamus ipsam quis architecto accusantium
              aliquam
            </p>
          </div>
        </div>
        <div className="service__main">
          <div className="service__content">
            <div className="service__img">
              <img src={img} alt="" />
            </div>
            <h4>Domain Services</h4>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              a voluptate odio accusamus ipsam quis architecto accusantium
              aliquam
            </p>
          </div>
        </div>
        <div className="service__main">
          <div className="service__content">
            <div className="service__img">
              <img src={img} alt="" />
            </div>
            <h4>Domain Services</h4>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              a voluptate odio accusamus ipsam quis architecto accusantium
              aliquam
            </p>
          </div>
        </div>
        <div className="service__main">
          <div className="service__content">
            <div className="service__img">
              <img src={img} alt="" />
            </div>
            <h4>Domain Services</h4>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              a voluptate odio accusamus ipsam quis architecto accusantium
              aliquam
            </p>
          </div>
        </div>
        <div className="service__main">
          <div className="service__content">
            <div className="service__img">
              <img src={img} alt="" />
            </div>
            <h4>Domain Services</h4>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              a voluptate odio accusamus ipsam quis architecto accusantium
              aliquam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
