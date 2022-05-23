import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./slider.css";

const Slider = () => {
  return (
    <div className="ok">
      <div className="slide-container">
        <Slide>
          <div className="slider__content">
            <span>hello</span>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slider;
