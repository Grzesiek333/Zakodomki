import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import Header from "./components/header";
import Footer from "./components/footer";

const Object = {
    getProductsData() {
        return [
            {
                id: '1',                
                name: 'Domek Szałas',
                description: 'Product Description',                
                price: 'od 700 PLN/doba',
            },
            {
                id: '2',                
                name: 'Apartament Pyzdra',
                description: 'Product Description',                
                price: 'od 700 PLN/doba',
            },
            {
                id: '3',                
                name: 'Apartament Tatrala',
                description: 'Product Description',                
                price: 'od 350 PLN/doba',
            }
            
        ]},

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};



function Table() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Object.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div style={{width: '100%', maxWidth: '800px'}} className="card">
            <DataTable  value={products} tableStyle={{ minWidth: '10rem', width: '100%' }}>                
                <Column style={{borderBlockEnd: 'solid 1px grey', width: '60%'}}  field="name" header="Obiekt"></Column>
                <Column style={{borderBlockEnd: 'solid 1px grey', width: '40%'}} field="price" header="Cena"></Column>
            </DataTable>
        </div>
    );
}
export default function Price() {
    return (
      <>
        <Header />
        <h2>Cennik:</h2>
        <Table />
        <div style={{marginTop: '30px'}}>Rezerwacja min. 2 doby. <br/>
            Obowiązuje dodatkowa opłata za sprzątanie w wysokości 150 zł za pobyt dla gości podróżujących ze zwierzętami.</div>
        <Footer />
      </>
    );
  }