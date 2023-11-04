import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

function ScrollToSection_GridCards() {
  const scrollToSection = () => {
    const section = document.getElementById('sekcja-gridcards');
    if (section) {
      const offset = section.offsetTop - 50; // Odejmij 50 pikseli od wysokości sekcji
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <a className='btn btn-outline-light btn-lg' role='button' onClick={scrollToSection}>
      Zapraszamy
    </a>
  );
}
export default function HeroImage() {
  return (
    <div style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{height: '100vh' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)'}}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Zakodomki</h1>
              <h4 className='mb-3'>Regionalne domki w Kościelisku</h4> 
              <ScrollToSection_GridCards />                         

            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}