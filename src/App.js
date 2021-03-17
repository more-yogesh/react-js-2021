import React from 'react';
import Header from './components/Header.component'
import Card from './components/Card.component'
import MyNavigation from './components/MyNavigation.component';
import './App.css';
const App = () => {
    const products = [
        {
            title: 'Shirt',
            price: 333,
            id: 1
        }, {
            title: 'Shirt 2',
            price: 5800,
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
            price: 2000,
            id: 5
        }
    ];

    const nav = ['home', 'contact', 'about', 'terms and condictions'];
    // console.log(products.length);
    const title = 'Easy Commerce';
    return (
        <div>
            <Header name={title} />
            <MyNavigation navigation={nav} />
            {products.map((value, index) => {
                return <Card name={value.title} price={value.price} />;
            })}
        </div>
    );
}

export default App;