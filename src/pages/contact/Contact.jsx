import "./contact.css";
import img from "../../assets/images/contact.png";
import MapComponent from "./Map";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";

const Contact = () => {
  return (
    <div className="parent">
      <div className="mxWidt gh">
        <div className="contact__container"></div>
        <div>
          <div className="contact__text">
            <h3>Contact</h3>
            <h4>Drop Us Message for Any Query</h4>
            <p>
              We are glad and looking forward to hear from you
            </p>
          </div>
          <div className="contact__info">
            <div>
              <CgPhone className="icon" />
              <p>+256 785988864</p>
              <p>+256 758914876</p>
            </div>
            <div>
              <GrMapLocation className="icon" />
              <p>Ham Towers,Level 3, RM HT28 Opp Makerere Main Gate, Kampala</p>
            </div>
            <div>
              <AiOutlineMail className="icon" />
              <p>manisa@happitechcorporation.com</p>
              <p>info@happitechcorporation.com</p>
            </div>
          </div>
          <div className="contact__gird">
            <div
              style={{
                width: "100%",
                height: "100%",
              
              }}
            >
              <img src={img} alt="" />
            </div>
            <div>
              <form>
                <div className="form__row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="form__row">
                  <input type="text" placeholder="Enter Email" />
                  <input type="text" placeholder="Enter Company" />
                </div>
                <div className="form__row textarea">
                  <textarea rows={9} placeholder="Enter Massage Here" />
                </div>
                <div className="form__btn">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="contact__map">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
