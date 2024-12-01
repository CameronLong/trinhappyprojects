import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Pricing from "./components/pages/Pricing";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
