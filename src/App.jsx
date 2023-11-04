import "./App.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import CalendarComponent from './import_booking'
import SignUp from "./signup";
import SignIn from "./signin";
import Home from "./home";
import Reservations from "./reservations";
import Szalas from "./szalas";
import Pyzdra from "./pyzdra";
import Tatrala from "./tatrala";
import Contact from "./contact";
import AboutUs from "./aboutus";
import Price from "./price";
import Map from "./map";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/szalas" element={<Szalas />} />
        <Route path="/pyzdra" element={<Pyzdra />} />
        <Route path="/tatrala" element={<Tatrala />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/onas" element={<AboutUs />} />
        <Route path="/cennik" element={<Price />} />
        <Route path="/mapa" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
