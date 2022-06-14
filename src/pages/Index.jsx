import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Hompage from "./Hompage";
import Port from "./portfolio/Portfolio";
import Item from "./portfolio/item/Item";
import Domain from "./domain/Domain";
import About from "./about/About";
import Wireless from "./wireless/Wireless";
import NotFound from "./notFound/NotFound";
import Contact from "./contact/Contact";
import Website from "./websit/Website";
import Software from "./soft/Software";
import It from "./it/It";
import Marketing from "./marketing/Marketing";
import System from "./system/System";

const Index = () => {
  return (
    <div>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Hompage />} />
            <Route path="/portfolio" element={<Port />}>
              <Route path="all" element={<Item />} />
              <Route path="edu" element={<Item />} />
            </Route>
            <Route path="/domain" element={<Domain />} />
            <Route path="/about" element={<About />} />
            <Route path="/wireless" element={<Wireless />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/website" element={<Website />} />
            <Route path="/software" element={<Software />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/it" element={<It />} />
            <Route path="/system" element={<System />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default Index;
