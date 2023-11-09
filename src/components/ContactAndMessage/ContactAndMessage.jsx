import React from 'react'
import Cards from './Cards'
import MessageForm from './MessageForm'

const ContactAndMessage = () => {
    return (
        <section className="contact-and-message">
            <div className="container">
                <div className="contact">
                    <Cards />
                </div>

                <div className="message-information">
                    <h2>Leave us a message<br />for any information.</h2>
                    <MessageForm />
                </div>
            </div>
        </section>
    )
}

export default ContactAndMessage