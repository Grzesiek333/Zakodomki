import React from 'react'; 
import { Menubar } from 'primereact/menubar';


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

    return (
            
            <Menubar model={items} style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', border: 'none',justifyContent: 'center'}}/>
        
        
    )
}
        