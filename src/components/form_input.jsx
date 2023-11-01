import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import supabase from '../services/supabase';

function Form_input() {
  const [message, setMessage] = useState([]);
  const [email, setEmail] = useState([]);

  async function onSaveMessage(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;

    const { data, error } = await supabase
      .from('contact_message')
      .insert([{ message: formElements[1].value, email: formElements[0].value }])
      .select();

    if (!error) {
      console.log('message added successfully');
      console.log(data);

      setMessage(prev => [...prev, data[0]]);
      setEmail(prev => [...prev, data[0]]);

      return;
    }

    console.error('something went wrong', error);
  }

  return (
    <Form onSubmit={onSaveMessage}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Form_input;