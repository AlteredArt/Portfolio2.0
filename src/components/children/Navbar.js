// fix names
import React, { useState, useEffect } from 'react';
import '../../styles/children/Navbar.css'
import { Link } from 'react-router-dom'


//scroll bar
const ScrollIndicator = () => {
    const [scrollTop, setScrollTop] = useState(0);
    // scrollbar functionality
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled)
    }
    // set scroll to window position
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <div>
            <div className='scrollBarWrapper'>
                <div className='scrollBarMainStyle' style={{ width: `${scrollTop}%` }}></div>
            </div>
        </div>
    )
}

//navbar
export default function NavBar({ children }) {
    return (
        <div className='navbar-main'>
            <div>
                <ScrollIndicator />
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
                    <Link className='name' to="/" >Jared Matta</Link>
                    <div className='nav-icons-tablet'>
                        <a href="https://www.linkedin.com/in/jared-matta/" ><img className='nav-logo linkedin' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/linkedin.png' alt='icon' /></a>
                        <a href="https://github.com/AlteredArt" ><img className='nav-logo github' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/github.png' alt='icon' /></a>
                        <a href="https://github.com/AlteredArt" ><img className='nav-logo email' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/email.png' alt='icon' /></a>
                        <span><a href="https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/Jared+Mattas+Resume.pdf" ><img className='nav-logo resume' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/resume.png' alt='icon' /></a></span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon nav-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="dropdown-divider"></div>
                        <ul className="navbar-nav nav-fill w-100">

                            <a href='/home' className="nav-item">Home</a>
                            <Link to='/projects' className="nav-item">Projects</Link>
                            <Link to='blogs' className="nav-item">Blogs</Link>

                            <li className="nav-item dropdown">
                                <a className="nav-item dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Extras</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item h3" href="/achievements">Achievements</a>
                                    <a className="dropdown-item h3" href="/graphics">Graphics</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item h3" href="/quotes">Quotes</a>
                                </div>
                            </li>

                            <div className='nav-icons-dropdown'>
                                <a href="https://www.linkedin.com/in/jared-matta/" ><img className='nav-logo-drop linkedin' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/linkedin.png' alt='icon' /></a>
                                <a href="https://github.com/AlteredArt" ><img className='nav-logo-drop github' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/github.png' alt='icon' /></a>
                                <a href="https://github.com/AlteredArt" ><img className='nav-logo-drop email' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/email.png' alt='icon' /></a>
                                <span><a href="https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/Jared+Mattas+Resume.pdf" ><img className='nav-logo-drop resume' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/resume.png' alt='icon' /></a></span>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
            { children}
        </div>
    )
}

