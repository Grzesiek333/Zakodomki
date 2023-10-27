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
            label: 'Kontakt',
            url: '/contact'
        }
    ];
    const [menuColor, setMenuColor] = useState("rgba(0, 0, 0, 0.1)"); // Domyślny kolor
    const [menuBorder, setMenuBorder] = useState("none");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setMenuColor("white"); // Kolor po przewinięciu
        setMenuBorder("1px solid #b0b0b0")
      } else {
        setMenuColor("rgba(0, 0, 0, 0.1)"); // Kolor na górze
        setMenuBorder("none")
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
          borderBottom: menuBorder,
          justifyContent: "center",
          backgroundColor: menuColor,
        }}
      />
    </div>
  );
}