import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <MDBRow style={{ width: '100%', maxWidth: '1228px' }}>
      <MDBFooter style={{ maxWidth: '1240px', marginTop: '40px' }} bgColor="light" className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Połącz się z nami w sieciach społecznościowych:</span>
          </div>

          <div>
            <a href="https://www.facebook.com/zakodomki/?locale=pl_PL" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://www.instagram.com/zakodomki/" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
          </div>
        </section>

        <section>
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Zakodomki
                </h6>
                <p>
                  Zespół domków i apartamentów łączących wygodę, nowoczesność i tradycje góralską.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
                <p>
                  <Link to="/szalas" className="text-reset">
                    Domek Szałas
                  </Link>
                </p>
                <p>
                  <Link to="/pyzdra" className="text-reset">
                    Apartament Pyzdra
                  </Link>
                </p>
                <p>
                  <Link to="/tatrala" className="text-reset">
                    Apartament Tatrala
                  </Link>
                </p>
                <p>
                  <Link to="/onas" className="text-reset">
                    O nas
                  </Link>
                </p>
                <p>
                  <Link to="/cennik" className="text-reset">
                    Cennik
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Przydatne linki:</h6>
                <p>
                  <Link to="/regulamin" className="text-reset">
                    Regulamin
                  </Link>
                </p>
                <p>
                  <Link to="/mapa" className="text-reset">
                    Mapa
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Kontakt</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Kościelisko,
                  <br /> ul. Nedzędzy-Kubińca 110
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  kontakt@zakodomki.pl
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" />
                  <a href="tel:+48606104359">+48 606 104 359</a>
                </p>
                {/* <p>
                <MDBIcon icon="phone" className="me-3" />
                <a href="tel:+0123456789">+48 720 769 324</a>
              </p> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:&nbsp;
          <Link className="text-reset fw-bold" to="/">
            Zakodomki.pl
          </Link>
        </div>
      </MDBFooter>
    </MDBRow>
  );
}
