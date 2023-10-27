import React from "react";
import GridCards from "./components/grid_cards";
import GridIcon from "./components/grid_icon";
import {Header_Home} from "./components/header";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
      <Header_Home />
      <GridIcon />
      <GridCards />
      <Footer />       
    </>
  );
}
