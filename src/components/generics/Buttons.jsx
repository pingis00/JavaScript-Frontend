import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({type, url, title, className, onClick}) => {

    const getButtonType = () => {
        switch(type) {
            case 'transparent':
                return 'btn-transparent'
            case 'black':
                return 'btn-black'
            case 'white':
                return 'btn-white'
            default:
                return 'btn-yellow'
        }
    }

    const handleClick = (e) => {
        if (onClick) {
            onClick(e)
        }
    }

    return (
        <Link className={`${getButtonType(type)} ${className}`} to={url} onClick={handleClick}>
            {title}
        <i className="fa-regular fa-arrow-up-right"></i></Link>
    )
}

export default Buttons