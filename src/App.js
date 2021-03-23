import React from 'react';
import Header from './components/Header.component'
import Card from './components/Card.component'
import MyNavigation from './components/MyNavigation.component';
import EventManager from './components/EventManager.component';
import CounterState from './components/CounterState.component';
import LiveTypingState from './components/LiveTypingState';

import './App.css';
const App = () => {
    const products = [
        {
            title: 'Shirt',
            price: 333,
            id: 1
        }
        // , {
        //     title: 'Shirt 2',
        //     price: 5800,
        //     id: 2
        // }, {
        //     title: 'Shirt 3',
        //     price: 580,
        //     id: 3
        // }, {
        //     title: 'Shirt 4',
        //     price: 580,
        //     id: 4
        // }, {
        //     title: 'Shirt 5',
        //     price: 2000,
        //     id: 5
        // }
    ];

    const nav = ['home', 'contact', 'about', 'terms and condictions'];
    // console.log(products.length);
    const title = 'yogehs more';


    const checkHeader = (headerTitle) => {

        if (headerTitle.length > 0) {
            alert('Title is ' + headerTitle);
        } else {

            alert('There is no title');
        }
        // let len = 0;
        // if (headerTitle.length == 0) {
        //     return len = 0;
        // }
        // return len = headerTitle.length;
    }

    return (
        <div>
            <LiveTypingState />
            <CounterState />
            <EventManager />
            <Header name={title} />
            <MyNavigation navigation={nav} />
            {products.map((value, index) => {
                return <Card key={value.id} name={value.title} price={value.price} id={value.id} />;
            })}
            <button onMouseEnter={() => {
                checkHeader(title)
            }}>Check Header</button>
        </div>
    );
}

export default App;