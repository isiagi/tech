import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";

import {CgWebsite} from 'react-icons/cg'

import "./slider.css";

const fadeImages = [
  {
    url: img1,
    caption: "Get Connected With High Speed Internet",
  },
  {
    url: img2,
    caption: "Software Services",
    show: `<ul>
    <li>Websites/Web Hosting</li>
    <li>Software Development/Sales</li>
    <li>IT Consultancy</li>
  </ul>`,
  },
  {
    url: img3,
    caption: "Build Your Team With African Developers",
  },
];

const Slider = () => {
  return (
    <div className="ok">
      <div className="slide-container">
        <Slide>
          {fadeImages.map(({ url, caption, show }) => (
            <div
              style={{
                background: `linear-gradient(rgba(32,178,170,.7), rgba(32,178,170,.7)), url(${url})`,
                minHeight: "80vh",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span className="caption__heading">{caption}</span>
              {show && (
                <span
                  dangerouslySetInnerHTML={{ __html: show }}
                  className="caption__content"
                ></span>
              )}
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Slider;
