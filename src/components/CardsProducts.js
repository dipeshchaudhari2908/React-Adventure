import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img10 from '../assets/images/img-10.jpg';
import img11 from '../assets/images/img-11.jpg';
import img14 from '../assets/images/img-14.png';
import img15 from '../assets/images/img-15.png';
import img16 from '../assets/images/img-16.png';
import img12 from '../assets/images/img-12.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these <u>Services</u></h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={img10}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Tickets"
                        path="/services" 
                        />
                        <CardItem 
                        src={img11}
                        text="Travel through the Island of Bali in a Private Cruise and more"
                        label="Air Hot Balloon"
                        path="/services" 
                        />
                        <CardItem 
                        src={img14}
                        text="Travel through the Island of Bali in a Private Cruise and more"
                        label="Visa"
                        path="/services" 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={img15}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="All in One Passes"
                        path="/services" 
                        />
                        <CardItem 
                        src={img16}
                        text="Travel through the Island of Bali in a Private Cruise"
                        label="Taxi"
                        path="/services" 
                        />
                        <CardItem 
                        src={img12}
                        text="Travel through the Island of Bali in a Private Cruise"
                        label="Passport"
                        path="/services" 
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
