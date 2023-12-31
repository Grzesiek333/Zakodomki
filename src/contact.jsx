import React from "react";
import Form_input from "./components/form_input";
import Header from "./components/header";
import Footer from "./components/footer";
import { MDBIcon } from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <>
      <Header />
      <h2>Kontakt</h2>
      <Form_input />      
      <Footer />
    </>
  );
}
