import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({title, description, url}) => {
    return (
        <div className="service">
            <Link className="box" to={url}>
                <h3>{title}</h3>
                <p>{description}</p>
                <i className="fa-duotone fa-circle-arrow-right"></i>
            </Link>
        </div>
    )
}

export default ServiceBox