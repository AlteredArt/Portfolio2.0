import React from 'react';
import '../../styles/children/Navbar.css'
// <nav class="navbar sticky-top navbar-light bg-light">
// import { Link } from 'react-router-dom';
const NavBar = ({ children }) => {
    return (
        <div>
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand text-uppercase font-weight-bold" style={{ color: "greenyellow" }} href="/">Jared Matta</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="dropdown-divider"></div>

                        <ul className="navbar-nav nav-fill w-100">
                            <li className="nav-item active">
                                <a className="nav-link h4" id="navtext" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link h4" id="navtext" href="/projectspage">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link h4" id="navtext" href="/blogspage">Blogs</a>
                            </li>
                            <li className="nav-item dropdown">


                                <a className="nav-link dropdown-toggle h4" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Media</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item h3" href="/achievementspage">Achievements</a>
                                    <a className="dropdown-item h3" href="/graphicspage">Graphic Design</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item h3" href="/">Cat Pictures</a>
                                    <a className="dropdown-item h3" href="/quotespage">Programming Quotes</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link h4 pl-10" id="navtext" href="#contact">Contact ME</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
            { children}
        </div >
    )
}

export default NavBar;