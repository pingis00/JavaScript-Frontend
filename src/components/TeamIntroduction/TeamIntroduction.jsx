import React from 'react'
import SectionTitle from '@generics/SectionTitle'
import Buttons from '@generics/Buttons'
import Dots from '@generics/Dots'
import TeamMembers from './TeamMembers'


const TeamIntroduction = () => {
    return (
        <section className="team-introduction">
            <div className="container">
                <div className="meet-our-team">
                    <SectionTitle title="Meet Our Team" headline="Experience Team Members" />
                    <Buttons url="/browseteam" title="Browse Team" />                   
                </div>
                <div className="team-members">
                    <TeamMembers />
                </div>
                <Dots count={5} />
            </div>  
        </section>
    )
}

export default TeamIntroduction