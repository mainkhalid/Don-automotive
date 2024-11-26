
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import CarCategory from "./pages/CarCategory";
import Showroom from "./pages/Showroom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pt-16"> {/* To offset the fixed Navbar height */}
          <Routes>
            <Route path="/" element={<Showroom />} />
            <Route path="/SUVs" element={<CarCategory category="SUVs" />} />
            <Route path="/hybrids" element={<CarCategory category="hybrids" />} />
            <Route path="/sports" element={<CarCategory category="sports" />} />
            <Route path="product" element={<Product />}>
              <Route path=":productid" element={<Product />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
