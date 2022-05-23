import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Hompage from "./Hompage";
import Port from "./portfolio/Portfolio";
import Item from './portfolio/item/Item'

const Index = () => {
  return (
    <div className="parent">
      <div className="mxWidth">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Hompage />} />
            <Route path='/portfolio' element={<Port />} >
              <Route path='all' element={<Item />} />
              <Route path='edu' element={<Item />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default Index;
