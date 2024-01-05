import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Gallery_Pyzdra from "./components/gallery_pyzdra";

export default function Pyzdra() {
  return (
    <>
      <Header />
    <section style={{maxWidth: '1240px'}}>
      <h2>Apartament Pyzdra</h2>
      <div style={{maxWidth: '1240px', textAlign: 'left'}}>Serdecznie zapraszamy Państwa do apartamentu zlokalizowanego w malowniczym Kościelisku. Komfortowe wnętrza oferują wypoczynek dla 8 osób. Dzięki doskonałej lokalizacji zarówno latem jak i zimą, turyści mogą swobodnie korzystać z licznych atrakcji jakie oferuje okolica, a także podziwiać podhalańskie krajobrazy.
      <br/>
      <br/>
      Apartament składa się z:
      <br/>
      
      <ul style={{marginLeft: '30px'}}>
        <li>trzech sypialni z łazienkami</li>
        <li>salonu z aneksem kuchennym</li>
        <li>oddzielnego wejście do budynku</li>
        <li>bezpłatnych dwóch miejsc postojowych</li>
        <li>plac zabaw dla dzieci</li>
        </ul>
      </div>
    </section>
    <Gallery_Pyzdra />
      
      <Footer />
    </>
  );
}