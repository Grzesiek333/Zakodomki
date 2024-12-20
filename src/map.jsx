import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";


export default function Map() {
  return (
    <>
      <Header />
        <h2>Mapa:</h2>
        <div style={{backgroundSize: 'cover', width: "100%", height: '100vh', maxWidth: '1228px', borderRadius: '0.5rem', boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)' }}>        
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14721.601584559285!2d19.89154400037219!3d49.287081905429595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715ed3e986b542f%3A0xb0dab77c31606937!2sZakodomki!5e0!3m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" 
            />            
          </div>
   
      <Footer />
    </>
  );
}
