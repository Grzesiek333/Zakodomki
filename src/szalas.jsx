import React from "react";

import InlineDemo from "./components/calendar";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Szalas() {
  return (
    <>
      <Header />
    <section style={{maxWidth: '1240px'}}>
      <h2>Domek Szalas</h2>
      <div style={{maxWidth: '1240px'}}>Tradycyjny góralski domek 8 osobowy. Domek jest dwupiętrowy. Na dole znajduje się: łazienka z prysznicem, aneks kuchenny, salon z TV, dwa pokoje dwuosobowe. Na górze natomiast jest otwarta przestrzeń z 3 łóżkami jedno z nich to małżeńskie oraz łazienka z prysznicem.
      Dogodna lokalizacja pozwala na szybkie dotarcie (pieszo lub busem) do wlotu dolin TPN.
      Dodatkowo jest miejsce na ognisko i duży (nieogrodzony) ogród do dyspozycji gości.
      Bezpłatne dwa miejsca postojowe. Plac zabaw dla dzieci.</div>
    </section>
      <InlineDemo />      
      <Footer />
    </>
  );
}
