import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="parent top">
      <div className="mxWidt nav__container">
        <h1>HappiTech</h1>

        <div className="nav__list">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li>
              <div className="nav__drop">
                <button className="nav__btn">Services</button>
                <div className="dropdown__menu">
                  <div>
                    <div className="dropdown__links">
                      <p><Link to='/domain'>Buy Domain</Link></p>
                      <p><Link to='/website'>Website Development and Web Hosting</Link></p>
                      <p><Link to='/wireless'>Wireless Internet</Link></p>
                      <p><Link to='/software'>Software Development</Link></p>
                      <p><Link to='/marketing'>Social and Digital Marketing</Link></p>
                      <p><Link to='/it'>IT Constancy</Link></p>
                      <p><Link to='/system'>Computer system sales and maintenance</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
