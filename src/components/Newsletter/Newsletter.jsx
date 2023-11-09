import React from 'react'
import Buttons from '@generics/Buttons'
import BackgroundLines from '@images/background-lines-right.svg'

const Newsletter = () => {
    return (
        <section className="newsletter">
            <img className="background-lines-right" src={BackgroundLines} alt="image of a wavy grey line" />
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form id="signUp" method="post">
                    <input type="email" id="email" name="email" title="E-postadress" placeholder="username@domain.com" />
                    <Buttons title="Subscribe" url="/subscribe" />
                </form>
            </div>
        </section>  
    )
}

export default Newsletter