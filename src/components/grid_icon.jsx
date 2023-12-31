import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faChildren } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons';

export default function GridIcon() {
  const iconStyle = { border: '1px solid #b0b0b0', borderRadius: '0.5rem', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)' };
  return (
    <>
      <h2>Zakodomki - udogodnienia:</h2>
      <MDBRow style={{width: '100%', maxWidth: '1240px'}}>
        <MDBCol md='4' style={{marginBottom: '20px'}}>
          <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faSquareParking} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Bezpłatny parking</h4>
          <p style={{marginTop: '10px'}}>Do każdego z domków przypisane są dwa miejsca postojowe</p>
          </div>
        </MDBCol>
        <MDBCol md='4'style={{marginBottom: '20px'}}>
        <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faWifi} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Szybki internet swiatłowodowy</h4>
          <p style={{marginTop: '10px'}}>W każdym z naszych domków klienci maja do dyspozycji bezprzewodowy internet świtłowodowy </p>
          </div>
        </MDBCol>
        <MDBCol md='4'style={{marginBottom: '20px'}}>
        <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faDog} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Zwierzęta mile widziane</h4>
          <p style={{marginTop: '10px'}}>Zapraszamy gości ze swoimi zwierzakami, może zaprzyjaźnią sie z naszymi pupilami </p>
          </div>
        </MDBCol>    
        <MDBCol md='4'style={{marginBottom: '20px'}}>
        <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faChildren} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Plac zabaw dla dzieci</h4>
          <p style={{marginTop: '10px'}}>W naszym ogrodzie znajduje się plac zabaw dla dzieci.</p>
          </div>
        </MDBCol>
        <MDBCol md='4'style={{marginBottom: '20px'}}>
        <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faFire} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Grill / ognisko</h4>
          <p style={{marginTop: '10px'}}>Każdy domek wyposażony jest w sprzęt do grillowania</p>
          </div>
        </MDBCol>
        <MDBCol md='4'style={{marginBottom: '20px'}}>
        <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faMountainSun} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Widok na góry</h4>
          <p style={{marginTop: '10px'}}>Z naszych domków jest piękny widok na Giewont i Czerwone Wierchy</p>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
}
