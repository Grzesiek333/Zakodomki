import React from 'react';         
import Menu from "./menu";
import HeroImage from "./hero";

export function Header_Home() {

  return (
    <>           
      <header className='bg-image'style={{ backgroundImage: "url('/media/background/1.jpg')",  width: "100%", height:'100vh'}}>
          <Menu />
          <HeroImage /> 
               
      </header>        
    </>
  );
}

export default function  Header() {

    return (
      <>         
        <header className='bg-image'style={{ backgroundImage: "url('/media/background/1.jpg')", backgroundPosition: 'center top', width: "100%", height:'40vh'}}>
            <Menu />            
        </header>        
      </>
    );
  }