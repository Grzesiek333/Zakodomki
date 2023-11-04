import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBRow style={{width: '100%', maxWidth: '1228px'}}>
    <MDBFooter style={{maxWidth: '1240px', marginTop: '40px'}} bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Połącz się z nami w sieciach społecznościowych:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>          
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
            </a>          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Zakodomki
              </h6>
              <p>
              Zespół domków i apartamentów łączących wygodę, nowoczesność i tradycje góralską.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Menu</h6>
              <p>
                <a href='/szalas' className='text-reset'>
                  Domek Szałas
                </a>
              </p>
              <p>
                <a href='pyzdra' className='text-reset'>
                  Apartament Pyzdra
                </a>
              </p>
              <p>
                <a href='tatrala' className='text-reset'>
                  Apartament Tatrala
                </a>
              </p>
              <p>
                <a href='onas' className='text-reset'>
                  O nas
                </a>
              </p>
              <p>
                <a href='cennik' className='text-reset'>
                  Cennik
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Przydatne linki:</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Regulamin
                </a>
              </p>
              <p>
                <a href='mapa' className='text-reset'>
                  Mapa
                </a>
              </p>

            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Kontakt</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Kościelisko, Małopolska
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                kontakt@zakodomki.pl
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 48 606 111 000
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:&nbsp;
        <a className='text-reset fw-bold' href='https://zakodomki.pl/'>
           Zakodomki.pl
        </a>
      </div>
    </MDBFooter>
    </MDBRow>
  );
}