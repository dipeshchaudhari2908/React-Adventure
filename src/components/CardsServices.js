import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img8 from '../assets/images/img-8.jpg';
import img3 from '../assets/images/img-3.jpg';
import img1 from '../assets/images/img-1.jpg';
import img5 from '../assets/images/img-5.jpg';
import img6 from '../assets/images/img-6.jpg';
//import img7 from '../assets/images/img-7.jpg';
import img11 from '../assets/images/img-11.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these <u>Products</u></h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={img8}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services" 
                        />
                        <CardItem 
                        src={img3}
                        text="Travel through the Island of Bali in a Private Cruise and more"
                        label="Luxury"
                        path="/services" 
                        />
                        <CardItem 
                        src={img11}
                        text="Travel through the Island of Bali in a Private Cruise and more"
                        label="Luxury"
                        path="/services" 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={img1}
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
