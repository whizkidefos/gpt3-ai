import React from 'react';
import './blog.css';
import { Article } from '../../components';

const Blog = () => {
    return (
        <section className='gpt3__blog section__padding' id='blog'>
            <div className="gpt3__blog-heading">
                <h2 className="gradient__text">A lot is happening,
                    We are blogging about it.</h2>
            </div>

            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article
                        imageUrl='images/blog01.png'
                        date='Nov 21, 2021'
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                </div>

                <div className="gpt3__blog-container_groupB">
                    <Article
                        imageUrl='images/blog02.png'
                        date='Nov 21, 2021'
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                    <Article
                        imageUrl='images/blog03.png'
                        date='Nov 21, 2021'
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                    <Article
                        imageUrl='images/blog04.png'
                        date='Nov 21, 2021'
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                    <Article
                        imageUrl='images/blog05.png'
                        date='Nov 21, 2021'
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                </div>
            </div>
        </section>
    )
}

export default Blog;
