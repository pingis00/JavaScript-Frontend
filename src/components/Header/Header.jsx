import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Buttons from '@generics/Buttons'
import SocialMediaIcons from '@generics/SocialMediaIcons'
import Logo from '@images/Logo.svg'

const Header = () => {
    return (
        <header>
            <div className="container">
                <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button> 
                <div className="logotype">
                    <Link to="/">
                        <img src={Logo} alt="crito logotype" />
                    </Link>
                </div>
                <div className="contactinformation-bar">
                    <div className="content-box">
                        <i className="fa-regular fa-phone-volume"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="content-box">
                        <i className="fa-regular fa-envelope"></i>
                            info@crito.com
                    </div>
                    <div className="content-box last">
                        <i className="fa-regular fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                    <SocialMediaIcons className="socialmedia-bar" />
                <div className="menu">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Service</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                    <Buttons title="Login" url="/login" className="btn-login" />
                </div>
            </div>
        </header>
    )
}

export default Header
