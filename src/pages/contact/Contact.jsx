import "./contact.css";
import img from '../../assets/images/contact.png'

const Contact = () => {
  return (
    <div className="parent">
      <div className="mxWidt gh">
        <div className="contact__container"></div>
        <div>
          <div>
            <h3>Contact</h3>
            <h4>Drop Us Message for Any Query</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="contact__gird">
          <div>
              <img src={img} alt="" />
          </div>
          <div>
              <form>
                <input type='text' />
                <input type='text' /><br />
                <input type='text' />
                <input type='text' />
              </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
