import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Gallery_Szalas from "./components/gallery_szalas";

export default function Tatrala() {
  return (
    <>
      <Header />
    <section style={{maxWidth: '1240px'}}>
      <h2>Apartament Tatrala</h2>
      <div style={{maxWidth: '1240px', textAlign: 'left'}}>Serdecznie zapraszamy Państwa do apartamentu zlokalizowanego w malowniczym Kościelisku. Komfortowe wnętrza oferują wypoczynek dla 4 osób (plus dziecko). Dzięki doskonałej lokalizacji zarówno latem jak i zimą, turyści mogą swobodnie korzystać z licznych atrakcji jakie oferuje okolica, a także podziwiać podhalańskie krajobrazy.
      <br/>
      <br/>
      Apartament składa się z:
      <br/>
      <br/>
      <ul style={{paddingLeft: '2rem' }}>
        <li>sypialni z dwoma pojedynczymi łóżkami z możliwością złączenia,</li>
        <li>sypialni z dwoma pojedynczymi łóżkami plus rozkładane łóżko dla dziecka,</li>
        <li>salon z aneksem kuchennym,</li>
        <li>telewizor LCD,</li>
        <li>łazienka z prysznicem,</li>
        <li>plac zabaw dla dzieci.</li>
      </ul>
  </div>
    </section>
    <Gallery_Szalas />
      
      <Footer />
    </>
  );
}