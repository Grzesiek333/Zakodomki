
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function Menu() {
    const items = [
        {
            label: 'Strona główna',
            icon: 'pi pi-fw pi-file',
            url: '/'

        },
        {
            label: 'Nasze obiekty',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Domek Szałas',
                    icon: 'pi pi-fw pi-align-left',
                    url: '/szalas'
                },
                {
                    label: 'Apartament 8-osobowy',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Apartament 4-osobowy',
                    icon: 'pi pi-fw pi-align-center'
                },             
            ]
        },
        {
            label: 'Cennik',
            icon: 'pi pi-fw pi-user',
           
        },
        {
            label: 'Atrakcje',
            icon: 'pi pi-fw pi-calendar',
            
        },
        {
            label: 'Regulamin',
            icon: 'pi pi-fw pi-power-off'
        },
        {
            label: 'Kontakt',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    return (
        
            <Menubar model={items} style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'} } />
        
    )
}
        