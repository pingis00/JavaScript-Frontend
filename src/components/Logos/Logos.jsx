import React from 'react'
import Paperz from '@images/paperz.svg'
import Dorfus from '@images/dorfus.svg'
import Martino from '@images/martino.svg'
import Square from '@images/square.svg'
import Gobona from '@images/gobona.svg'

const imageList = [
    { src: Paperz, alt: 'logo that says paperz'},
    { src: Dorfus, alt: 'logo that says Dorfus'},
    { src: Martino, alt: 'logo that says Martino'},
    { src: Square, alt: 'logo that says Square'},
    { src: Gobona, alt: 'logo that says Gobona'}
]

const Logos = () => {
  return (
    <section className="logos">
        <div className="container"> 
            {
                imageList.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))
            }
        </div>  
    </section>
  )
}

export default Logos