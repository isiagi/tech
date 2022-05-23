import "./nav.css";

const Nav = () => {
  return (
    <div className="nav__container">
      <h1>HappiTech</h1>

      <div className="nav__list">
        <ul>
          <li>Home</li>
          <li>
            <div className="nav__drop">
              <button className="nav__btn">Services</button>
              <div className="dropdown__menu">
                <div>
                  <div className="dropdown__links">
                    <p>Buy Domain</p>
                    <p>Website Development and Web Hosting</p>
                    <p>Wireless Internet</p>
                    <p>Software Development</p>
                    <p>Social and Digital Marketing</p>
                    <p>IT Constancy</p>
                    <p>Computer system sales and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
