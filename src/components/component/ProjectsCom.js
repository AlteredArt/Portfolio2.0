import React, { useEffect } from 'react';
import PROJECTS from '../../data/projects';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Project = props => {
    const { title, image, description, demo, code, github, stack } = props.project;

    return (
        <div className='single-block'>
            <h1 className="sub-title">{title}</h1>
            <a href={demo}><img src={image} alt="profile" className='single-img' /></a>
            <h6 className="desText" >STACK: {stack}</h6>
            <p className='desText' >{description}</p>
            <a href={code}><button className='btn' >Code!</button></a>
            <a href={github}><button className='btn' >GITHUB!</button></a>
            <br />
            <a href={demo}><button className='btn' >DEMO!</button></a>
        </div>
    )
}



export default function ProjectsHome() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div>
            <h2 className="title">Projects! </h2>
            <a href='/projectspage'><button className="btn">MORE PROJECTS</button></a>
            <div data-aos='fade-right'>
                {
                    PROJECTS.slice(0, 2).map(PROJECT => (
                        <Project key={PROJECT.id} project={PROJECT} />
                    ))
                }
            </div>
            <hr data-aos="slide-left" />
        </div>
    )
}




export function ProjectsForPage() {

    return (
        <div>
            <h2 className="title">Projects!</h2>
            <div>
                {
                    PROJECTS.map(PROJECT => (
                        <Project key={PROJECT.id} project={PROJECT} />
                    ))
                }
            </div>
            <hr />
        </div>
    )
}