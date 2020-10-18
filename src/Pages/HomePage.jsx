import React, { useEffect } from 'react'

import ProjectsHome from '../components/component/ProjectsCom';
import BlogsHome from '../components/component/BlogsCom';
import QuotesHome from '../components/component/QuotesCom';
import AchievementsHome from '../components/component/AchievementsCom';
import GraphicsHome from '../components/component/GraphicsCom';

import Footer from '../components/children/Footer';
import NavBar from '../components/children/Navbar';

import ProfilePic from '../assets/images/profile.JPG';
import TitlesHome from '../components/home/TitlesHome';
import BioHome from '../components/home/BioHome';

import Aos from 'aos';
import 'aos/dist/aos.css'


export default function Home() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div >
            <NavBar />
            <h1 className="main-title">Full Stack Developer & Graphic Designer</h1>
            <TitlesHome />
            <img src={ProfilePic} alt="profile" className='profilePic' />
            <BioHome />
            <hr data-aos='slide-left' />
            <ProjectsHome />
            <BlogsHome />
            <AchievementsHome />
            <GraphicsHome />
            <QuotesHome />
            <Footer />
        </div>
    )
}
