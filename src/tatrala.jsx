import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Gallery_Szalas from "./components/gallery_szalas";

export default function Tatrala() {
  return (
    <>
      <Header />
      <section style={{maxWidth: '1240px', marginInline: '5px'}}>
      <h2>Apartament Tatrala</h2>
      <div style={{maxWidth: '1240px', textAlign: 'left'}}>Zapraszamy do Apartamentu Tatrala – Twojego miejsca w sercu Podhala!
            Nasza przestrzeń w malowniczym Kościelisku to idealny wybór dla 4 osób poszukujących komfortu, relaksu i pięknych widoków. Dzięki znakomitej lokalizacji możesz w pełni korzystać z uroków regionu przez cały rok – od wędrówek górskich latem po zimowe szaleństwo na stokach.
      <br/>
      <br/>
      Co oferuje Apartament Tatrala?
      <br/>
      <br/>
      <ul style={{paddingLeft: '2rem' }}>
        <li>Przytulne sypialnie: pierwsza z dwoma pojedynczymi łóżkami (z możliwością złączenia),
        druga z dwoma pojedynczymi łóżkami i rozkładaną sofą dla dziecka.</li>
        <li>Przestronna jadalnia z aneksem kuchennym.</li>
        <li>Łazienka z prysznicem – wygodna i stylowa.</li>
        <li>Plac zabaw dla dzieci – miejsce na chwile radości dla najmłodszych.</li>
      </ul>
      <br/>
      Pozwól sobie na chwilę wytchnienia i delektuj się pięknem Podhala w Apartamencie Tatrala. Rezerwuj już dziś i przeżyj niezapomniane chwile!
  </div>
    </section>
    <Gallery_Szalas />
      
      <Footer />
    </>
  );
}