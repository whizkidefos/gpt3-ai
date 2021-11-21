import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './backToTop.css';

const BackToTop = () => {
    const btn = document.getElementById('backToTopBtn');

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }

    const backToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <aside className='gpt3__backToTop'>
            <button onClick={backToTop} id="backToTopBtn" title="Scroll to top">
                <AiOutlineArrowUp />
            </button>
        </aside>
    )
}

export default BackToTop;
