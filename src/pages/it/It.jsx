import img from "../../assets/images/helo.jpg";
import { FaHandsHelping } from "react-icons/fa";
import "./it.css";

const It = () => {
  return (
    <div className="parent">
      <div className="mxWidt bg">
        <div className="it__container"></div>
        <div className="it__section">
          <div className="it__img">
            <img src={img} alt="it consultancy" />
          </div>
          <h2>IT CONSULTANCY</h2>
          <p>
            Growing digitalization and an increased focus on on-demand services,
            have prompted companies to rapidly launch enterprise applications
            offering a consistent user experience across devices. Technologies
            like DevOps have helped shorten application development timelines
            significantly, and business users now want to develop and manage
            apps themselves, minimizing the reliance on IT teams.
          </p>
          <div>
            <h2>Areas covered for consultancy</h2>
            <ul>
              <li>
                <FaHandsHelping className="it__icons" /> Cloud Computing
              </li>
              <li>
                <FaHandsHelping className="it__icons" /> Cyber Security
              </li>
              <li>
                <FaHandsHelping className="it__icons" /> Big data And Analytics
              </li>
              <li>
                <FaHandsHelping className="it__icons" /> IT forensics
              </li>
              <li>
                <FaHandsHelping className="it__icons" /> Digital Finance
              </li>
              <li>
                <FaHandsHelping className="it__icons" /> artificial
                intelligence/machine learning
              </li>
              <li>And More</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default It;
