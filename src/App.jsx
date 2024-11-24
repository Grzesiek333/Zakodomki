import "./scss/App.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "./home";
import Szalas from "./szalas";
import Pyzdra from "./pyzdra";
import Tatrala from "./tatrala";
import Contact from "./contact";
import AboutUs from "./aboutus";
import Price from "./price";
import Map from "./map";
import Regulamin from "./regulamin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/szalas" element={<Szalas />} />
        <Route path="/pyzdra" element={<Pyzdra />} />
        <Route path="/tatrala" element={<Tatrala />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/onas" element={<AboutUs />} />
        <Route path="/cennik" element={<Price />} />
        <Route path="/mapa" element={<Map />} />
        <Route path="/regulamin" element={<Regulamin />} />
      </Routes>
    </Router>
  );
}

export default App;
