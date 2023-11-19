import React from 'react'
import { useNavigate } from 'react-router-dom'
import Notfound from '@images/img-not-found.png'
import Buttons from '../../components/generics/Buttons'
import Footer from '../../components/Footer/Footer'

const NotFound = () => {

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <section className='not-found'>
            <div className='container'> 
                <div className='image-container'>
                    <img src={Notfound} alt="" />
                </div>
                <div className='notfound-text'>
                    <h1>Page Not Found!</h1>
                    <p>Unable to find the page you were looking for.</p>
                    <Buttons className='btn' title='Go back' onClick={handleGoBack}/>   
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default NotFound