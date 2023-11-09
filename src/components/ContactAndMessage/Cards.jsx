import React from 'react'
import ImgLocation from '@images/icon-location.svg'
import ImgTelephone from '@images/icon-telephone.svg'
import ImgEmail from '@images/icon-email.svg'

const cardList = [
    {img: ImgLocation, alt: 'icon of a location-symbol', title: 'Visit us', info: 'Sveavägen 31', info2: '111 34 STOCKHOLM'},
    {img: ImgTelephone, alt: 'icon of a telephone', title: 'Call us', info: '+46 (8) 121 470 50', info2: '+46 (8) 121 470 51'},
    {img: ImgEmail, alt: 'icon of a letter', title: 'Email us', info: 'info@crito.com', info2: 'support@crito.com'}
]

const Cards = () => {
    return ( 
        cardList.map((card, index) => (
            <div key={index} className="card">
                <img src={card.img} alt={card.alt} />
                <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.info}<br />{card.info2}</p>
                </div>
            </div>
        ))
    )
}

export default Cards