import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonSkiingNordic } from '@fortawesome/free-solid-svg-icons';
import { faPersonSkiing } from '@fortawesome/free-solid-svg-icons';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faChild } from '@fortawesome/free-solid-svg-icons';

export default function GridActractions() {
  const iconStyle = { border: '1px solid #b0b0b0', borderRadius: '0.5rem', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)' };
  return (
    <>
      <h2>Atrakcje w pobliżu:</h2>
      <MDBRow style={{width: '100%', maxWidth: '1240px'}}>
        <MDBCol md='4' style={{marginBottom: '20px'}}>
          <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faPersonSwimming} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Kompieliska termalne</h4>
          <p style={{marginTop: '10px'}}>Termy Zakopiańskie 6 km <br/> Termy Chochołowskie 13,7 km</p>
          </div>
        </MDBCol>
        <MDBCol md='4'style={{marginBottom: '20px'}}>
        <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faUtensils} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Regionalne karczmy i restauracje</h4>
          <p style={{marginTop: '10px'}}>Góralski Gościniec 50 m<br/> Karczma Polany 1,5 km </p>
          </div>
        </MDBCol>
        <MDBCol md='4'style={{marginBottom: '20px'}}>
        <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faPersonSkiingNordic} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Narciarstwo biegowe</h4>
          <p style={{marginTop: '10px'}}>Chotarz - trasy biegowe 2,1 km <br/> Kiry - strzelnica biatlonowa 3 km </p>
          </div>
        </MDBCol>    
        <MDBCol md='4'style={{marginBottom: '20px'}}>
        <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faPersonSkiing} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Narciarstwo zjazdowe</h4>
          <p style={{marginTop: '10px'}}> Stacja narciarska Szymaszkowa 2 km<br/> Stacja narciarska Witów Ski 6 km </p>
          </div>
        </MDBCol>
        <MDBCol md='4'style={{marginBottom: '20px'}}>
        <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faMountain} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Tatrzański Park Narodowy</h4>
          <p style={{marginTop: '10px'}}>Dolina Małej Łąki 3,6 km, Dolina Kościeliska 3,8 km, Dolina Chochołowska 5,6 km</p>
          </div>
        </MDBCol>
        <MDBCol md='4'style={{marginBottom: '20px'}}>
        <div className="order-3 p-2" style={iconStyle}>
          <FontAwesomeIcon icon={faChild} size="2xl" style={{color: "#b0b0b0", width: '100px', height: '100px'}} />
          <h4 style={{marginTop: '10px'}}>Sala zabaw</h4>
          <p style={{marginTop: '10px'}}>Fabryka Talentów 400 m <br/>U Tłustego Kraba 5,2 km</p>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
}
