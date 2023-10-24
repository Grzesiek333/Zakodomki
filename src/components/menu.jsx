import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { useState, useEffect } from "react";


export default function Menu() {
    const items = [
        {
            label: 'Strona główna',
            
            url: '/'

        },
        {
            label: 'Nasze obiekty',
            
            items: [
                {
                    label: 'Domek Szałas',
                    url: '/szalas'
                },
                {
                    label: 'Apartament Pyzdra',
                    
                },
                {
                    label: 'Apartament Tatrala',
                    
                },             
            ]
        },
        {
            label: 'Cennik',
           
           
        },
        {
            label: 'Atrakcje',
            
            
        },
        {
            label: 'Regulamin',
            
        },
        {
            label: 'Kontakt',
            url: '/contact'
        }
    ];
    const [menuColor, setMenuColor] = useState("rgba(0, 0, 0, 0.1)"); // Domyślny kolor

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setMenuColor("white"); // Kolor po przewinięciu
      } else {
        setMenuColor("rgba(0, 0, 0, 0.1)"); // Kolor na górze
      };
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: menuColor,
        zIndex: 1000,
      }}
    >
      <Menubar
        model={items}
        style={{
          border: "none",
          justifyContent: "center",
          backgroundColor: menuColor,
        }}
      />
    </div>
  );
}