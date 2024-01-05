import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function GridCards() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const handleCardMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };
  function scrollToTop() {
    window.scrollTo(0, 250);
  }
  const items_cards = [
    {
      LinkTo: '/szalas',
      scr: 'media/szalas/main_foto.jpg',
      title: 'Domek Szałas',
      text: 'Góralski domek 8-osobowy, dwupiętrowy. Obok domku jest miejsce na ognisko i duży (nieogrodzony) ogród do dyspozycji gości.',
      price: 'od 700 PLN/dobę'
    },
    {
      LinkTo: '/tatrala',
      scr: 'media/ap-4-osobowy/main_foto.jpg',
      title: 'Apartament Tatrala',
      text: 'Apartament 4-osobowy, jednopoziomowy. Obok domku jest miejsce na ognisko i duży (nieogrodzony) ogród do dyspozycji gości.',
      price: 'od 350 PLN/dobę'
    },
    {
      LinkTo: '/pyzdra',
      scr: 'media/ap-8-osobowy/main_foto.jpg',
      title: 'Apartament Pyzdra',
      text: 'Apartament 8-osobowy, dwupiętrowy. Obok domku jest miejsce na ognisko i duży (nieogrodzony) ogród do dyspozycji gości.',
      price: 'od 700 PLN/dobę'
    },   
  ]
  return (
    <>
    <section id="sekcja-gridcards">
      <h2>Wybierz domek dla siebie:</h2>
      <Row xs={1} md={3} className="g-4" style={{ maxWidth: '1240px',     marginLeft: 'auto',
    marginRight: 'auto' }}>
        {items_cards.map((item, idx) => (
          <Col key={idx} >
            <Link to={item.LinkTo} onClick={scrollToTop}>
              <Card onMouseEnter={() => handleCardMouseEnter(idx)}
                  onMouseLeave={handleCardMouseLeave}
                  style={{
                    boxShadow: hoveredCard === idx
                      ? '0 12px 24px 0 rgba(0, 0, 0, 0.2)'
                      : '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                    transition: '0.3s',
                  }}>
                <Card.Img variant="top" src={item.scr} />
                <Card.Body >
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <p>Cena: {item.price}</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
      ))}     
    </Row>
    </section>
    </>
  );
}

export default GridCards;