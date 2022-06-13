import "./website.css";
import img from "../../assets/images/web.jpg";
import img1 from "../../assets/images/hap.jpg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdWifiCalling } from "react-icons/md";

const Website = () => {
  return (
    <div className="parent">
      <div className="mxWidt bg">
        <div className="web__container"></div>
        <div className="web__section">
          <div className="img">
            <img src={img} alt="website_development" />
          </div>
          <h1>Website Development And Web Hosting</h1>
          <p>
            With over a decade of experience, we’ve established ourselves as one
            of the pioneering agencies in the region. Our small, flexible, agile
            and design-led structures and processes allow us to be highly
            responsive and innovative. We’re made of passionate leaders,
            strategists, managers, developers, animators and designers who work
            together under one umbrella. We are a digitally-led, full-service
            creative agency. We combine strategy, marketing, design.
          </p>
          <div className="web__card">
            <div className="web__card__content">
              <HiOutlineBadgeCheck className="web__icon" />
              <span>
                <h2>Why It Soft</h2>
                <p>We're making room for self care today with plan.</p>
              </span>
            </div>
            <div className="web__card__content">
              <MdWifiCalling className="web__icon" />
              <span>
                <h2>Unlimited support</h2>
                <p>New range coming in on a weekly basis veg section.</p>
              </span>
            </div>
          </div>
          <div className="web__card__grid">
            <div>
              <img src={img1} alt=" " />
            </div>
            <div>
              <h2>We serve the best work</h2>
              <p>
                By initiating your project with Fingent, you get a dedicated and
                skilled team backing you up round-the-clock. All our processes
                are the customer oriented, designed to reduce the cost of
                business operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
