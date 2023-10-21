import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function HeroImage() {
  return (
    <div style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{height: 600 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Zakodomki</h1>
              <h4 className='mb-3'>Regionalne domki w Kościelisku</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Zapraszamy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}