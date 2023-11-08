import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({type, url, title, className}) => {

    const getButtonType = () => {
        switch(type) {
            case 'transparent':
                return 'btn-transparent'
            case 'black':
                return 'btn-black'
            default:
                return 'btn-yellow'
        }
    }

    return (
        <Link className={`${getButtonType(type)} ${className}`} to={url}>{title}
        <i className="fa-regular fa-arrow-up-right"></i></Link>
    )
}

export default Buttons