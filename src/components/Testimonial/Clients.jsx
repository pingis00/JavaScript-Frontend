import React from 'react'
import Stars from '@images/Star.svg'
import Cassandra from '@images/img-cassandra.png'
import Amanda from '@images/img-amanda.png'
import Jack from '@images/img-jack.png'

const clientList = [
    {
        img: Stars, alt: 'image of orange stars that are used for ratings', 
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate', 
        imgClient: Cassandra, altClient: 'image of Cassandra Warren, Business manager, Dorfus', name: 'Cassandra Warren', occupation: 'Business Manager, Dorfus'
    },
    {
        img: Stars, alt: 'image of orange stars that are used for ratings', 
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate', 
        imgClient: Amanda, altClient: 'image of Amanda Tulling, Senior Developer, Square', name: 'Amanda Tulling', occupation: 'Senior Developer, Square'
    },
    {
        img: Stars, alt: 'image of orange stars that are used for ratings', 
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate', 
        imgClient: Jack, altClient: 'image of Jack McDouglas, Key Account Manager, Gobona', name: 'Jack McDouglas', occupation: 'Key Account Manager, Gobona'
    }
]

const Clients = () => {
    return (
        clientList.map((client, index) => (
            <div key={index} className='client'>
                <img className="stars" src={client.img} alt={client.alt} />
                <p>{client.text}</p>
                <div className="client-name">
                    <img src={client.imgClient} alt={client.altClient} /> 
                    <h3>{client.name}
                        <p>{client.occupation}</p>
                    </h3>
                </div>
            </div>
        ))
    )
}

export default Clients