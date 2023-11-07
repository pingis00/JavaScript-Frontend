import React from 'react'

const SectionTitle = ({title, headline}) => {
    return (
        <div className="section-title">
            <p>{title}</p>
            <h2>{headline}</h2>
        </div>
    )
}

export default SectionTitle