import React from "react";
import "./domain.css";

const Domain = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="parent">
      <div className="mxWidt domain__container">
        <div>
          <div className="domain__content">
            <h1>Hello</h1>
          </div>
          <div className="pad">
            <h3>Find Your Perfect Name</h3>
            <p>Domain Search</p>
            <div className="domain__input">
              <input type="text" className="domain__input" />
              <select className="domain__select">
                <option>.com</option>
                <option>.co</option>
                <option>.ug</option>
              </select>
              <span className="domain__btn">Search</span>
            </div>
            <div className="domain__col">
              <div>
                <h3>.com</h3>
                <h3>$ 12</h3>
              </div>
              <div>
                <h3>.net</h3>
                <h3>$ 12</h3>
              </div>
              <div>
                <h3>.co</h3>
                <h3>$ 12</h3>
              </div>
              <div>
                <h3>.org</h3>
                <h3>$ 12</h3>
              </div>
            </div>
            <div className="domain__result">
              <h4>Check out our Pricing</h4>
              <p>Domain Results</p>
              <p>
                Purchase real domains at an affordable price and have your
                online identity.
              </p>
              <div className='domain__reg'>
                  <h2>Registration</h2>
                  <div className='domain__sel'>
                     <h3>.com</h3> 
                     <h3>$ 12</h3>
                     <button>Register</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
