import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import supabase from '../services/supabase';

function FormInput() {
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
    <div>
      {submitted ? (
        <div>
          <p>Wiadomość została wysłana!</p>
        </div>
      ) : (
        <Form onSubmit={onSaveMessage}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
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
            <Form.Control as="textarea" rows={5} style={{ width: '400px' }} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Wyślij
          </Button>
        </Form>
      )}
    </div>
  );
}

export default FormInput;
