import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='gpt3__footer section__padding'>
            <div className="gpt3__footer-heading">
                <h2 className="gradient__text">Do you want to step in to the future before others</h2>
            </div>

            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <h3>GPT-3.AI</h3>
                    <small>71 Cunnery Rd, M2 7EG Manchester | All Rights Reserved.</small>
                </div>

                <div className="gpt3__footer-links_nav">
                    <h4>Useful Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className="gpt3__footer-links_nav">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>About Us</p>
                    <p>Connect</p>
                </div>

                <div className="gpt3__footer-links_nav">
                    <h4>Get in Touch</h4>
                    <p>71 Cunnery Rd, M2 7EG Manchester</p>
                    <p>+44 0123 456 789</p>
                    <p>info@gpt3.ai</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>Credits: Designed by AR Shakir | Developed by Efosa Igbinehi</p>
            </div>
        </footer>
    )
}

export default Footer;
