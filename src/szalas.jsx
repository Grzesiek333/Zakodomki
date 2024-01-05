import React from "react";

// import InlineDemo from "./components/calendar";
import Header from "./components/header";
import Footer from "./components/footer";
import Gallery from "./components/gallery_szalas";
import Gallery_Szalas from "./components/gallery_szalas";

export default function Szalas() {
  return (
    <>
      <Header />
      <section style={{maxWidth: '1240px', marginInline: '5px'}}>
      <h2>Domek Szalas</h2>
      <div style={{maxWidth: '1240px', textAlign: 'left'}}>Tradycyjny góralski domek 8 osobowy. Domek jest dwupiętrowy. Na dole znajduje się:<br/> 
      <ul style={{paddingLeft: '2rem' }}>
      <li>łazienka z prysznicem, aneks kuchenny,</li>
      <li>salon z TV,</li>
      <li>dwa pokoje dwuosobowe.</li>
      </ul>
      <br/>
      Na górze natomiast jest otwarta przestrzeń z 3 łóżkami jedno z nich to małżeńskie oraz łazienka z prysznicem.
      Dogodna lokalizacja pozwala na szybkie dotarcie (pieszo lub busem) do wlotu dolin TPN.
      Dodatkowo jest miejsce na ognisko i duży (nieogrodzony) ogród do dyspozycji gości.
      Bezpłatne dwa miejsca postojowe. Plac zabaw dla dzieci.</div>
    </section>
    <h3 style= {{marginTop: '20px'}}>Zdjęcia:</h3>
    <Gallery_Szalas/>
      {/* <InlineDemo />       */}
      <Footer />
    </>
  );
}
