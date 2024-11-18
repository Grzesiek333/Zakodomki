import React, { useState, useEffect } from "react";
import { MDBIcon } from 'mdb-react-ui-kit';
import '../scss/contact.scss';


export default function Contact_section() {
  return (
    <>      
      <h2>Kontakt</h2>
      <div style={{backgroundImage: "url('/media/background/contact.jpg')", backgroundSize: 'cover', width: "100%", height: '110vh', maxWidth: '1240px', borderRadius: '0.5rem', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '5%'}}>
        
        
        <div style={{width: '400px', backgroundColor: 'white', paddingBlock: '30px', paddingInline: '50px', borderRadius: '0.5rem', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'}}>              
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              <a href="mailto:kontakt@zakodomki.pl">kontakt@zakodomki.pl</a>
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" />
              <a href="tel:+48606111000">+48 606 104 359</a>
            </p>
            <p>
              <MDBIcon icon="home" className="me-2" />
              Kościelisko ul. Nedzędzy-Kubińca 110
            </p>
            <p style={{marginBottom: '0px'}}>
              <MDBIcon icon="coins" className="me-2"  />
              Nr konta: 
              <br/>        
              38 1050 1474 1000 0097 4752 7175
            </p>
          </div>
        <div className="map_contact">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14721.601584559285!2d19.89154400037219!3d49.287081905429595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715ed3e986b542f%3A0xb0dab77c31606937!2sZakodomki!5e0!3m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" 
            />  
          </div>
        </div>
      
    </>
  );
}

