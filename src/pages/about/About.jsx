import "./about.css";
import img from "../../assets/images/mission.jpg";
import img1 from "../../assets/images/vision.jpg";

const About = () => {
  return (
    <div className="parent">
      <div className="mxWidt">
        <div className="about__container">
          <h1>About</h1>
        </div>
        <div>
          <h2>About Us</h2>
          <p>
            Happi Tech Corporation is a registered Information company operating
            in Kampala Uganda Africa. Registered under the name of HappiTech
            Enterprise, we later adopted the trade name of HAPPITECH
            Corporation.We are the leading providers of domain name
            registeration, dedicated web hosting, website Design and Ecommerce,
            Internet service, digital marketing solutions in Uganda and East
            Africa aiming to serve the world at large.
          </p>
          <br />
          <p>
            The Company has grown from a small web hosting company in Uganda
            with just two servers into a regional leading industry and
            recongnized hosting provider with more than 200 domains hosted by
            HappiTech Corporation
          </p>
        </div>
        <div>
          <div className="about__content1">
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="about__text">
              <h2>Vision</h2>
              <p>
                Delievering results-oriented brand marketing programs and public
                relations campaigns that enhance our clients awareness, improve
                their sales and foster their growth.
              </p>
            </div>
          </div>
          <div className="about__content1">
            <div className="about__text">
              <h2>Mission</h2>
              <p>
                To provide innovative and effective intergrated brand marketing
                and Publicrelations solution whichhelps our clients grow their
                businesses and realise their marketing goals
              </p>
            </div>
            <div className="about__img">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
