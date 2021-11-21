import React from 'react';
import './brand.css';

const Brand = () => {
    return (
        <section className='gpt3__brand section__margin'>
            <figure className="">
                <img src="images/google.png" alt="google" />
            </figure>
            <figure className="">
                <img src="images/slack.png" alt="slack" />
            </figure>
            <figure className="">
                <img src="images/shopify.png" alt="shopify" />
            </figure>
            <figure className="">
                <img src="images/atlassian.png" alt="atlassian" />
            </figure>
            <figure className="">
                <img src="images/dropbox.png" alt="dropbox" />
            </figure>
        </section>
    )
}

export default Brand;
