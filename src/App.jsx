import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InlineDemo from "./components/calendar";
// import CalendarComponent from './import_booking'
import SignUp from "./signup";
import SignIn from "./signin";
import Home from "./home";
import Reservations from "./reservations";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<InlineDemo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Router>
  );
}

export default App;
