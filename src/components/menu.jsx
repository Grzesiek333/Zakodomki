import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-indigo/theme.css";

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
                    label: 'Apartament 8-osobowy',
                    
                },
                {
                    label: 'Apartament 4-osobowy',
                    
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

    return (
        
            <Menubar model={items} style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}/>
        
    )
}
        