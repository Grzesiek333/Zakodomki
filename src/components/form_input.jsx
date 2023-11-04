import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import supabase from '../services/supabase';

function FormInput(props) {
  const [message, setMessage] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  async function onSaveMessage(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const emailValue = formElements[1].value;

    if (!validateEmail(emailValue)) {
      setEmailError('Podaj poprawny adres email.');
      return;
    }

    const { data, error } = await supabase
      .from('contact_message')
      .insert([
        {
          message: formElements[2].value,
          email: formElements[1].value,
          name: formElements[0].value,
        }
      ])
      .select();

    if (!error) {
      console.log('message added successfully');
      console.log(data);

      setMessage(prev => [...prev, data[0]]);
      setEmailError('');
      setSubmitted(true); // Ustaw potwierdzenie wysłania wiadomości

      return;
    }

    console.error('something went wrong', error);
  }

  return (
    <>    
    <div style={{backgroundImage: "url('/media/background/2.jpeg')", backgroundSize: 'cover', width: "100%", height:'100vh', maxWidth: '1024px',  borderRadius: '0.5rem', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)', display: 'flex', flexWrap: 'wrap', justifyContent: 'right', alignItems: 'center'}}> 
    {props.children}   
    <div style={{ width: '400px', backgroundColor: 'white', marginInline: '8%', paddingBlock: '30px', paddingInline: '50px', borderRadius: '0.5rem', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',}}>
      {submitted ? (
        <div>
          <p>Wiadomość została wysłana!</p>
        </div>
      ) : (
        <Form onSubmit={onSaveMessage}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
            <h5>Masz pytanie? Napisz do nas</h5>
            <Form.Label>Imię i nazwisko:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="przykład@wp.pl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{ color: 'red' }}>{emailError}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Treść wiadomości:</Form.Label>
            <Form.Control as="textarea" rows={5}  />
          </Form.Group>
          <Button variant="primary" type="submit">
            Wyślij
          </Button>
        </Form>
      )}
    </div>
    </div>
    </>
  );
}

export default FormInput;
