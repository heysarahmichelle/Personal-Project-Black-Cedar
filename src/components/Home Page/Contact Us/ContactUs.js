import React, { Component } from 'react';
import './contactUs.scss'


class ContactUs extends Component {
    render() {
        return (
            <div className="contact-us-component">
                <div className="info-components">
                    <section            className="contact-info-component">CONTACT US
                        <p className="contact-info-email">EMAIL | </p>
                        <p className="contact-info-customer-support">CUSTOMER SUPPORT | </p>
                        <p className="contact-info-collaborations">COLLABORATIONS | </p>
                        <p className="contact-info-about-us">ABOUT US | </p>
                        <p className="contact-info-blog">BLOG | </p>
                        <p className="contact-info-press">PRESS INQUIRIES | </p>
                        <p className="contact-info-outlet">VISIT THE OUTLET | </p>
                    </section>
                    <section className="up-to-date-component">STAY UP TO DATE WITH BLACK CEDAR
                        <p className="up-to-date-paragraph">Get 10% off your next order plus inspiration, updates, and more on our Instagram, Pinterest, and Facebook pages</p>
                        <input 
                        className="up-to-date-email"
                        placeholder="Enter your email address"
                        ></input>
                        <button className="up-to-date-subscribe">SUBSCRIBE</button>
                    </section>
                </div>
            </div>
        )
    }
}

export default ContactUs;