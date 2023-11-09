import React from 'react'
import Header from '../components/Header/Header'
import LetsConnect from '../components/LetsConnect/LetsConnect'
import ContactAndMessage from '../components/ContactAndMessage/ContactAndMessage'
import Map from '../components/Map/Map'
import Brandsummary from '../components/BrandSummary/Brandsummary'
import Footer from '../components/Footer/Footer'


const Contact = () => {
    return (
        <>
            <Header />
            <LetsConnect />
            <ContactAndMessage />
            <Map />
            <Brandsummary />
            <Footer />
        </>
    )
}

export default Contact