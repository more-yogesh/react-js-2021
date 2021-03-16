import React from 'react';
import Header from './components/Header.component'
import Card from './components/Card.component'
import './App.css';
const App = () => {
    const products = [
        {
            title: 'Shirt',
            price: 580,
            id: 1
        }, {
            title: 'Shirt 2',
            price: 580,
            id: 2
        }, {
            title: 'Shirt 3',
            price: 580,
            id: 3
        }, {
            title: 'Shirt 4',
            price: 580,
            id: 4
        }, {
            title: 'Shirt 5',
            price: 580,
            id: 5
        }
    ];
    // console.log(products.length);
    const title = 'Easy Commerce';
    return (
        <div>
            <Header name={title} />
            {products.map((value, index)=>{
                return <Card />;
            })}
            
        </div>
    );
}

export default App;