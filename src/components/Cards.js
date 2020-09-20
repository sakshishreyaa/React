import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import '../App.css';

function Cards() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bg.jpg'
              text='Explore the ..........................'
              path='/'
            />
            <CardItem
              src='images/bg.jpg'
              text='Travel ................................'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bg.jpg'
              text='Set Sail...........................'
              path='/'
            />
            <CardItem
              src='images/bg.jpg'
              text='Experience the..................'
              path='/'
            />
            <CardItem
              src='images/bg.jpg'
              text='Ride through .................'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;