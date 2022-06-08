import "./software.css";
import img from '../../assets/images/p.jpg'

const Software = () => {
  return (
    <div className="parent">
      <div className="mxWidt software__container">
        <div className="software__grid">
          <div>
              <img src={img} alt='software__image' />
          </div>
          <div>
          <h2>We Have Your Software Solutions</h2>    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
