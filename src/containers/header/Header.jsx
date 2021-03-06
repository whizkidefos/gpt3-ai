import React from 'react';
import './header.css';

const Header = () => {
    return (
        <section className='gpt3__header section__padding' id='home'>
            <div className="gpt3__header-content fade-in-bottom">
                <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                <div className="gpt3__header-content__input">
                    <input type="email" name="email" id="email" placeholder='Enter your email' />
                    <button>Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src="images/people.png" alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className="gpt3__header-image scale-in-center">
                <img src="images/ai.png" alt="ai" />
            </div>
        </section>
    )
}

export default Header;
