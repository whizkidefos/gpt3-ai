import React from 'react';
import './whatGPT3.css';
import Features from '../features/Features';

const WhatGPT3 = () => {
    return (
        <section className='gpt3__whatgpt3 section__margin' id='whatgpt3'>
            <div className="gpt3__whatgpt3-feature">
                <Features />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h2 className="gradient-text">The possibilities are beyond your imagination</h2>
                <p>Explore The Library</p>
            </div>

            <div className="gpt3__whatgpt3-container">
                <Features />
                <Features />
                <Features />
            </div>
        </section>
    )
}

export default WhatGPT3
