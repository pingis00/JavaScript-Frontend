import React from 'react'
import Kristine from '@images/img-Kristine.png'
import Mark from '@images/img-mark.png'
import Kimberly from '@images/img-Kimberly.png'
import Justin from '@images/img-justin.png'

const membersList = [
    {img: Kristine, alt: 'image of Kristine Palmer, chef operation officer', name: 'Kristine Palmer', occupation: 'Chef Operation Officer'},
    {img: Mark, alt: 'image of Mark Arubi, senior consulant', name: 'Mark Arubi', occupation: 'Senior Consulant'},
    {img: Kimberly, alt: 'image of Kimberly Hansen, senior consulant', name: 'Kimberly Hansen', occupation: 'Senior Consulant'},
    {img: Justin, alt: 'image of Justin Willoman, senior tech consulant', name: 'Justin Willoman', occupation: 'Senior Tech Consulant'}
]


const TeamMembers = () => {
    return (
        membersList.map((member, index) => (
            <div key={index} className="team-member">
                <img src={member.img} alt={member.alt} />
                <h3>{member.name}</h3>
                <p>{member.occupation}</p>
            </div>
        ))
    )
}

export default TeamMembers