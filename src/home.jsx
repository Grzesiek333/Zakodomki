import React from "react";
import GridCards from "./components/grid_cards";
import GridIcon from "./components/grid_icon";
import {Header_Home} from "./components/header";
import Comments from "./components/comments";
import Contact_section from "./components/contact_section";
import Footer from "./components/footer";



export default function Home() {
  return (
    <>
      <Header_Home />
      <GridIcon />
      <GridCards />
      <Comments />
      <Contact_section />
      <Footer />       
    </>
  );
}
