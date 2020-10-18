import React from 'react';
import '../../styles/children/Navbar.css'
import { Link } from 'react-router-dom'
import ScrollBar from './ScrollIndicator'

const NavBar = ({ children }) => {
    return (
        <div className='navbar-main'>

            <div>
                <ScrollBar />
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark" style={{ top: '5px' }}>
                    <a className="navbar-brand text-uppercase font-weight-bold" style={{ color: "greenyellow" }} href="/" >Jared Matta</a>
                    <a href="https://www.linkedin.com/in/jared-matta/" ><img className='nav-logo-link linkedin' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/linkedin.png' alt='icon' /></a>
                    <a href="https://github.com/AlteredArt" ><img className='nav-logo-link github' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/github.png' alt='icon' /></a>
                    <a href="https://github.com/AlteredArt" ><img className='nav-logo-link email' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/email.png' alt='icon' /></a>
                    <a href="https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/Jared+Mattas+Resume.pdf" ><img className='nav-logo-link resume' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/resume.png' alt='icon' /></a>
                    <button className="navbar-toggler" type="button" data-toggle="dropdown" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon nav-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="dropdown-divider"></div>
                        <ul className="navbar-nav nav-fill w-100">
                            <a href='/homepage' className="nav-item active">
                                <div className="nav-link h4" id="navtext" >Home</div>
                            </a>
                            <Link to='/projectspage' className="nav-item">
                                <div className="nav-link h4" id="navtext">Projects</div>
                            </Link>
                            <Link to='blogspage' className="nav-item">
                                <div className="nav-link h4" id="navtext">Blogs</div>
                            </Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle h4" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Extras</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item h3" href="/achievementspage">Achievements</a>
                                    <a className="dropdown-item h3" href="/graphicspage">Graphic Design</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item h3" href="/quotespage">Quotes</a>
                                </div>

                            </li>
                            <a href="https://www.linkedin.com/in/jared-matta/" ><img className='nav-logo-link-drop linkedin' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/linkedin.png' alt='icon' /></a>
                            <a href="https://github.com/AlteredArt" ><img className='nav-logo-link-drop github' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/github.png' alt='icon' /></a>
                            <a href="https://github.com/AlteredArt" ><img className='nav-logo-link-drop email' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/email.png' alt='icon' /></a>
                            <a href="https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/Jared+Mattas+Resume.pdf" ><img className='nav-logo-link-drop resume' src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/resume.png' alt='icon' /></a>
                        </ul>
                    </div>
                </nav>
            </div>
            { children}
        </div>
    )
}

export default NavBar;
// <span className="sr-only">(current)</span>
//collapse