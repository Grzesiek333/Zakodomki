import React from "react";
import Form_input from "./components/form_input";
import Header from "./components/header";
import Footer from "./components/footer";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <>
      <Header />
      <h2>Kontakt</h2>
      <Form_input><div style={{width: '300px', backgroundColor: 'white', marginRight: '8%', paddingBlock: '30px', paddingInline: '50px', borderRadius: '0.5rem', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'}}>              
      <p>
        <MDBIcon icon="envelope" className="me-3" />
        <a href="mailto:kontakt@zakodomki.pl">kontakt@zakodomki.pl</a>
      </p>
      <p>
        <MDBIcon icon="phone" className="me-3" />
        <a href="tel:+48606111000">+48 606 111 000</a>
      </p>
      <p>
        <MDBIcon icon="phone" className="me-3" />
        <a href="tel:+0123456789">+01 234 567 89</a>
      </p>
      <p>
        <MDBIcon icon="home" className="me-2" />
        Kościelisko, Małopolska
      </p>
      </div></Form_input>
      <Footer />
    </>
  );
}
