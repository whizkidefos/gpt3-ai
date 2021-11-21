import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#whatgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3__navbar slide-in-top'>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <h3>GPT-3.AI</h3>
                </div>

                <nav className="gpt3__navbar-links_container">
                    <Menu />
                </nav>
            </div>

            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>

            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu &&
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type='button' className='btn-custom'>Sign up</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar;
