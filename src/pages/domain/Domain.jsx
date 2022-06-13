import { useEffect, useState } from "react";
import axiosConfig from "../../api/axiosConfig";
import "./domain.css";

const Domain = () => {
  const [input, setInput] = useState("isiagi");
  const [inpu, setInpu] = useState();
  const [select, setSelect] = useState(".com");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
    
  // }, [inpu]);

  const handleSelect = (e) => {
    let { value } = e.target;
    setSelect(value);
  };

  const handleChange = (e) => {
    let { value } = e.target;
    setInput(value);
  };

  const handleSearch = () => {
    // console.log('hey')
    setInpu(`${input}${select}`);
    axiosConfig
      .post("/domain", { domain: inpu })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // alert(JSON.stringify(err));
        console.log(err);
      });
  };

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
            <p>{inpu}</p>
            <div className="domain__inpu">
              <input
                type="text"
                className="domain__input"
                onChange={handleChange}
              />
              <select
                className="domain__select"
                onChange={handleSelect}
                value={select}
                defaultValue={select}
              >
                <option value=".com">.com</option>
                <option value=".co">.co</option>
                <option value=".ug">.ug</option>
              </select>
              <span className="domain__btn" onClick={handleSearch}>
                Search
              </span>
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
              <div className="domain__reg">
                <h2>Registration</h2>
                <div className="domain__sel">
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
