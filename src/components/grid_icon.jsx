import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function GridIcon() {
  return (
    <>
<h1>Grid Icon</h1>
<MDBRow>
      <MDBCol md='4'>
      <div className="order-3 p-2" style={{border: '1px solid grey', borderRadius: '3px', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'}}>First flex item</div>      
      </MDBCol>
      <MDBCol md='4'>
      <div className="order-2 p-2" style={{border: '1px solid grey', borderRadius: '3px', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'}}>Second flex item</div> 
      </MDBCol>
      <MDBCol md='4'>
      <div className="order-1 p-2" style={{border: '1px solid grey', borderRadius: '3px', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'}}>Third flex item</div>
      </MDBCol>
</MDBRow>

    </>
  );
}
