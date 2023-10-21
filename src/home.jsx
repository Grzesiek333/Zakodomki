import React from 'react';         
import Menu from "./components/menu";
import HeroImage from "./components/hero";
import GridCards from "./components/grid_cards";

export default function Home() {

  return (
    <>
        <header className='p-5 text-center bg-image'style={{ backgroundImage: "url('media/background/1.jpg')", height: "100%", width: "100%" }}>
            <Menu />
            <HeroImage />
        </header>
        <GridCards />
    </>
  );
}


