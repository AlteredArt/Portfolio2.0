import React from 'react';
// <nav class="navbar sticky-top navbar-light bg-light">

// import { Link } from 'react-router-dom';
const NavBar = ({ children }) => {
    return (
        <div>

            <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
                    <a class="navbar-brand text-uppercase font-weight-bold" id="navtext" href="/"><u>Jared Matta</u></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav nav-fill w-100">
                            <li class="nav-item active">
                                <a class="nav-link h4" id="navtext" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link h4" id="navtext" href="/projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link h4" id="navtext" href="/blogs">Blogs</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle h4" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Media</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item h3" href="#">Graphic Design</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item h3" href="#">Cat Pictures</a>
                                    <a class="dropdown-item h3" href="/Quotes">Programming Quotes</a>
                                </div>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link h4 pl-10" id="navtext" href="/#contact">Contact ME</a>
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