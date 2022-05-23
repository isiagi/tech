import "./banner1.css";

const Banner1 = () => {
  return (
    <div className="banner__container">
      <div className="banner__content1">
        <div className="banner__wrapper">
          <div>
            <div className="banner__sample">
              .com $ 6.99 / .net $ 4.99 / .co $ 2.77 / .org $ 4.90
            </div>
            <div>Get your online version</div>
          </div>
          <div className="banner__input">
            <input type="text" className="banner__input" />
            <select className="banner__select">
              <option>.com</option>
              <option>.co</option>
              <option>.ug</option>
            </select>
            <span className="banner__btn">Search</span>
          </div>
        </div>
      </div>
      <div className="banner__content2"></div>
    </div>
  );
};

export default Banner1;
