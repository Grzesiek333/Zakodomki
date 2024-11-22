import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <h2>O nas</h2>
      <div style={{ maxWidth: '1228px', borderRadius: '0.5rem', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)', padding: '30px' }} >
        <div style={{ width: '100%', textAlign: 'left', overflow: 'hidden' }}>         
          <img src="/media/aboutus/1.JPG" style={{ minWidth: '150px', width: '50%', margin: '5px', marginLeft: '2%', float: 'right', borderRadius: '10px' }} />
          <div style={{ textAlign: 'justify', marginTop: '1%'}}>
            ZAKODOMKI to domki i apartamenty łączące wygodę, nowoczesność i tradycje góralską. W trakcie procesu budowy i urządzania udało się nam stworzyć niezapomniany i wyjątkowy klimat z połączenia stylu zakopiańskiego z prawdziwą góralską architekturą.
            <br/>
             Zlokalizowane są w spokojnej dzielnicy Kościeliska. Zaledwie 4 km do centrum Zakopanego. Przy domku jest zielony ogród, grill. Z okien naszych góralskich domków rozpościera się wspaniały widok na Giewont i Czerwone Wierchy. Malownicze widoki na wszystkie górskie szczyty gwarantują niezapomniane wrażenia. Urządzone są w podobnym stylu łącząc wygodę i góralski klimat drewnianej chałupy. Wysoki standard, komfort i przestronność dają poczucie swobody i domowej atmosfery.          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
