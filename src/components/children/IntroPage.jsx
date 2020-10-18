//done / renders the intro screen 
import React, { useEffect } from 'react';
import logo from '../../assets/social/logo.svg';
//aos animation
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Intro() {
    //aos animation
    useEffect(() => {
        Aos.init({ duration: 50 });
    }, [])

    return (
        <div className='intro-div'>
            <h1 className='intro-title' >
                Welcome to my React<br /><br />
                <span>P</span>
                <span>O</span>
                <span>R</span>
                <span>T</span>
                <span>F</span>
                <span>O</span>
                <span>L</span>
                <span>I</span>
                <span>O</span>
                <span>:</span>
                <span>2</span>
                <span>.</span>
                <span>0</span>
            </h1><br /><br />
            <span data-aos='slide-left'>
                <img src={logo} className="App-logo" alt="logo" />
            </span>
        </div>
    )
}
