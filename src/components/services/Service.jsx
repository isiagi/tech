import img from "../../assets/images/target.png";
import "./service.css";

const Service = () => {
  return (
    <div className="service__container">
      <div className="service__wrapper">
        <h2>Our Features</h2>
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
              We sell generic domain services to help you acquire you online
              name up and running at an affordable price with a range of Tll's
              suitable for your business worldwide.
            </p>
          </div>
        </div>
        <div className="service__main">
          <div className="service__content">
            <div className="service__img">
              <img src={img} alt="" />
            </div>
            <h4>Wireless Internet</h4>
            <p>
              {" "}
              We provide wireless internet to businesses and Individuals to
              enable them achieve their best business and normal social
              operations.We only charge mbps.
            </p>
          </div>
        </div>
        <div className="service__main">
          <div className="service__content">
            <div className="service__img">
              <img src={img} alt="" />
            </div>
            <h4>Web Hosting and Development</h4>
            <p>
              {" "}
              We help business with web development which involves design and
              development of websites, as well as Web Hosting where we serve
              your apps to the internet.
            </p>
          </div>
        </div>
        <div className="service__main">
          <div className="service__content">
            <div className="service__img">
              <img src={img} alt="" />
            </div>
            <h4>Software Development</h4>
            <p>
              {" "}
              Developing software that meets specific business requirements is
              necessary for survival in today’s competitive era and custom
              software development has become an ideal solution for businesses.
            </p>
          </div>
        </div>
        <div className="service__main">
          <div className="service__content">
            <div className="service__img">
              <img src={img} alt="" />
            </div>
            <h4>Social and digital media marketing</h4>
            <p>
              {" "}
              We aim at helping clients and business have amazing presence on
              the internet that will help them in achieving their marketing
              goals at large. We handle all social and digital platform.
            </p>
          </div>
        </div>
        <div className="service__main">
          <div className="service__content">
            <div className="service__img">
              <img src={img} alt="" />
            </div>
            <h4>IT Consultancy</h4>
            <p>
              {" "}
              Growing digitalization and an increased focus on on-demand
              services, have prompted companies to rapidly launch enterprise
              applications offering a consistent user experience across devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
