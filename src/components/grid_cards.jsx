import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function GridCards() {
  function scrollToTop() {
    window.scrollTo(0, 250);
  }
  const items_cards = [
    {
      LinkTo: '/szalas',
      scr: 'media/szalas/main_foto.jpg',
      title: 'Domek Szałas',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit     longer.',
      price: 'od 700 PLN/dobę'
    },
    {
      LinkTo: '/tatrala',
      scr: 'media/ap-4-osobowy/main_foto.jpg',
      title: 'Apartament Tatrala',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit     longer.',
      price: 'od 350 PLN/dobę'
    },
    {
      LinkTo: '/pyzdra',
      scr: 'media/ap-8-osobowy/main_foto.jpg',
      title: 'Apartament Pyzdra',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit     longer.',
      price: 'od 700 PLN/dobę'
    },   
  ]
  return (
    <>
    <section id="sekcja-gridcards">
      <h2>Wybierz domek dla siebie:</h2>
      <Row xs={1} md={3} className="g-4" style={{ maxWidth: '1240px' }}>
        {items_cards.map((item, idx) => (
          <Col key={idx} >
            <Link to={item.LinkTo} onClick={scrollToTop}>
              <Card>
                <Card.Img variant="top" src={item.scr} />
                <Card.Body>
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