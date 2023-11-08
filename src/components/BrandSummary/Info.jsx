import React from 'react'
import { Link } from 'react-router-dom'

const groups = [
    {
        title: 'Company',
        links: [
            {linkTo: '/about', text: 'About'},
            {linkTo: '/features', text: 'Features'},
            {linkTo: '/works', text: 'Works'},
            {linkTo: '/career', text: 'Career'},
        ]
    },
    {
        title: 'Help',
        links: [
            {linkTo: '/customersupport', text: 'Customer Support'},
            {linkTo: '/deliverydetails', text: 'Delivery Details'},
            {linkTo: '/terms&conditions', text: 'Terms & Conditions'},
            {linkTo: '/privacypolicy', text: 'Privacy Policy'},
        ]
    },
    {
        title: 'Resourses',
        links: [
            {linkTo: '/freebooks', text: 'Free eBooks'},
            {linkTo: '/development', text: 'Development Tutorial'},
            {linkTo: '/howtoblog', text: 'How to blog'},
            {linkTo: '/youtubeplaylist', text: 'Youtube Playlist'},
        ]
    },
    {
        title: 'Link',
        links: [
            {linkTo: '/freebooks', text: 'Free eBooks'},
            {linkTo: '/development', text: 'Development Tutorial'},
            {linkTo: '/howtoblog', text: 'How to blog'},
            {linkTo: '/youtubeplaylist', text: 'Youtube Playlist'},
        ]
    },
]

const Info = () => {
    return (            
        groups.map((group, index) => (
            <div key={index} className="info">
                <h3>{group.title}</h3>
                <ul>
                    {group.links.map((link, linkIndex) => (
                        <li key={linkIndex}><Link to={link.to}>{link.text}</Link></li>
                    ))}
                </ul>
            </div>
        ))
            
    )
}

export default Info