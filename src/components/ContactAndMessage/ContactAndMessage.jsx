import React from 'react'
import Cards from './Cards'

const ContactAndMessage = () => {
    return (
        <section className="contact-and-message">
            <div className="container">
                <div className="contact">
                    <Cards />
                </div>

                <div className="message-information">
                    <h2>Leave us a message<br />for any information.</h2>
                    <form id="message" method="post">
                        <div>
                            <input className="form-input" type="text" id="name" name="name" title="Namn" placeholder="Name*" tabindex="1" required />
                        </div>
                        <div>
                            <input className="form-input" type="email" id="email" name="email" title="E-postadress" placeholder="Email*" tabindex="2" required />
                        </div>
                        <div>
                            <textarea className="form-input" id="your-message" name="your-message" title=" Ditt Meddelande" placeholder="Your Message*" rows="5" tabindex="3" required></textarea>
                        </div>
                        <div>
                            <button className="form-input btn-yellow" type="submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>  
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactAndMessage