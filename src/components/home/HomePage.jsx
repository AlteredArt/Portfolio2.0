//done / home page component
import React, { useEffect } from 'react'
// components
import ProjectsHome from '../component/ProjectsCom';
import BlogsHome from '../component/BlogsCom';
import QuotesHome from '../component/QuotesCom';
import AchievementsHome from '../component/AchievementsCom';
import GraphicsHome from '../component/GraphicsCom';
// children
import Footer from '../children/Footer';
import NavBar from '../children/Navbar';
import TitlesHome from './TitlesHome';
import BioHome from './BioHome';
//aos
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function Home() {
    //aos animation
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div >
            <NavBar />
            <h1 className="main-title">Full Stack Developer & Graphic Designer</h1>
            <TitlesHome />
            <img src='https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/headshot' alt="profile" className='profilePic' />
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
