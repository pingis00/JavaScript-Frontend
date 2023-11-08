import React from 'react'
import Buttons from '@generics/Buttons'
import ProjectAndCases from './ProjectAndCases'


const ProjectAndCase = () => {
    return (
        <section className="project-and-case">
            <div className="container">
                <div className="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let’s Looks Our Global Projects</h2>
                </div>
                    <ProjectAndCases />
                <div className="center-content">
                    <Buttons type="black" url="/allrecentprojects" title="All Recent Projects" />
                </div>
            </div>
        </section>
    )
}

export default ProjectAndCase