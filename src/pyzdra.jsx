import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Gallery_Pyzdra from "./components/gallery_pyzdra";

export default function Pyzdra() {
  return (
    <>
      <Header />
    <section style={{maxWidth: '1240px', marginInline: '5px'}}>
      <h2>Apartament Pyzdra</h2>
      <div style={{maxWidth: '1240px', textAlign: 'left'}}>Zapraszamy do naszego stylowego apartamentu w sercu malowniczego Kościeliska! To idealne miejsce na wypoczynek dla 8 osób, łączące komfort, wygodę i doskonałą lokalizację. O każdej porze roku czeka tu na Was mnóstwo atrakcji – od górskich szlaków po zimowe sporty – a wszystko to w otoczeniu zapierających dech w piersiach podhalańskich krajobrazów.
      <br/>
      <br/>
      Co oferujemy?
      <br/>
      
      <ul style={{marginLeft: '30px'}}>
        <li>Trzy komfortowe sypialnie – każda z prywatną łazienką, dla pełnej wygody i intymności.</li>
        <li>Przestronny salon z aneksem kuchennym – idealny na wspólne chwile z bliskimi.</li>
        <li>Oddzielne wejście – zapewniające prywatność i swobodę.</li>
        <li>Dwa bezpłatne miejsca parkingowe – bo wygoda naszych gości jest priorytetem.</li>
        <li>Plac zabaw dla dzieci – aby najmłodsi też bawili się świetnie.</li>
        </ul>
        <br/>
        Wybierz Apartament Pyzdra i ciesz się niezapomnianym wypoczynkiem w wyjątkowym miejscu. Zarezerwuj już dziś i doświadcz magii Podhala! 
      </div>
    </section>
    <Gallery_Pyzdra />
      
      <Footer />
    </>
  );
}