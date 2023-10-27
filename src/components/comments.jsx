import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Comments() {
  return (
    <>
    <h2>Opinie naszych gości: </h2>
    <MDBRow style={{width: '100%', maxWidth: '1240px'}}>
    <MDBCol md='4' style={{marginBottom: '20px'}}>
      <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
        <MDBCardHeader>Wiktor (Polska)</MDBCardHeader>
        <MDBCardBody className='text-primary'>
          <MDBCardText>
          „Gorąco polecam. Pani Anna jest niezwykle pomocnym i uprzejmym gospodarzem. Domek rewelacja. Na miejscu również jest dostępny grill.”
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol md='4' style={{marginBottom: '20px'}}>
      <MDBCard
        shadow='0'
        border='secondary'
        background='white'
        className='mb-3'
      >
        <MDBCardHeader>Ana (USA)</MDBCardHeader>
        <MDBCardBody className='text-secondary'>          
          <MDBCardText>
          „We went to Zakopane for a wedding and booked our stay here. The house was very clean and Anna even helped us book a make up and hair person for the wedding. She responded really quick to all of our messages and was very helpful. The house was located close to a small convenience store and a supermarket. Really recommend.” 
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol md='4' style={{marginBottom: '20px'}}>
      <MDBCard shadow='0' border='success' background='white' className='mb-3'>
        <MDBCardHeader>Przemysław (Polska)</MDBCardHeader>
        <MDBCardBody className='text-success'>          
          <MDBCardText>
          „Bardzo schludnie i czysto. Przemiła gospodyni.”
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>    
      </MDBRow>
      </>
  );
}