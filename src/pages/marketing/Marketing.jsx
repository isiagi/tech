import img from "../../assets/images/mac1.webp";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

import "./marketing.css";

const Marketing = () => {
  return (
    <div className="parent">
      <div className="mxWidt bg">
        <div className="mac__container"></div>
        <div className="it__section">
          <div className="mac__img">
            <img src={img} alt="it consultancy" />
          </div>

          {/* 0770499663 */}
          <h2>Digital And Social Marketing</h2>
          <p>
            We aim at helping clients and business have amazing presence on the
            internet that will help them in achieving their marketing goals at
            large
          </p>
          <div>
            <p style={{fontWeight: "500"}}>
              We focus on handling the different social media platform as below
            </p>
            <ul>
              <li>
                <AiOutlineFacebook className="it__icons" /> Facebook
              </li>
              <li>
                <AiFillTwitterCircle className="it__icons" /> Twitter
              </li>
              <li>
                <AiOutlineInstagram className="it__icons" /> Instagram
              </li>
              <li>
                <AiOutlineLinkedin className="it__icons" /> LinkedIn
              </li>
              <li>
                <BsSnapchat className="it__icons" /> Snapchat
              </li>
              <li>
                <BsPinterest className="it__icons" /> Pinterest
              </li>
              <li>And More</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
