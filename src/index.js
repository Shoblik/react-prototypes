import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => Math.floor(Math.random() * 1000) + 1;

const user = {
    name: 'Simon',
    luckyNumber: luckyNumber(),
}


const greeting = (userObj) => {
    return <div className='container'><h1>Hello, {userObj.name}</h1><h2 className='text-muted'>You're lucky number is {userObj.luckyNumber}</h2></div>
}


ReactDOM.render(
   greeting(user),
    document.getElementById('root')
);
