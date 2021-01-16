import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img9 from '../assets/images/img-9.jpg';
import img2 from '../assets/images/img-2.jpg';
import img4 from '../assets/images/img-4.jpg';
import img5 from '../assets/images/img-5.jpg';
import img6 from '../assets/images/img-6.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={img9}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services" 
                        />
                        <CardItem 
                        src={img2}
                        text="Travel through the Island of Bali in a Private Cruise and more"
                        label="Luxury"
                        path="/services" 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={img4}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services" 
                        />
                        <CardItem 
                        src={img5}
                        text="Travel through the Island of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services" 
                        />
                        <CardItem 
                        src={img6}
                        text="Travel through the Island of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services" 
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
