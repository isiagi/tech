import "./software.css";
import img from "../../assets/images/p.jpg";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Software = () => {
  return (
    <div className="parent">
      <div className="mxWidt software__container">
        <div className="software__grid">
          <div>
            <img src={img} alt="software__image" />
          </div>
          <div className="software__content">
            <h2>We Have Your Software Solutions</h2>
            <ul>
              <li><HiOutlineBadgeCheck /> Mobile Application Development</li>
              <li><HiOutlineBadgeCheck /> Ecommerce Software Development</li>
              <li><HiOutlineBadgeCheck /> SaaS Development</li>
              <li><HiOutlineBadgeCheck /> Custom Product Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
