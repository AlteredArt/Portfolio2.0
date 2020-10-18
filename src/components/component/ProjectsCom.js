import React, { useEffect } from 'react';
import PROJECTS from '../../data/projects';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Project = props => {
    const { title, image, description, demo, code, github, stack } = props.project;

    return (
        <div className='single-block-home'>
            <h1 className="sub-title-home ">{title}</h1>
            <a href={demo}><img src={image} alt="profile" className='single-img-home ' /></a>
            <h6 className="desText-home ">STACK: {stack}</h6>
            <p className='desText-home ' >{description}</p>
            <a href={code}><button className='btn-home ' >Code!</button></a>
            <a href={github}><button className='btn-home '  >GITHUB!</button></a>
            <br />
            <a href={demo}><button className='btn-home '>DEMO!</button></a>
        </div>
    )
}



export default function ProjectsHome() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <div>
            <h2 className="title-home">Projects! </h2>
            <a href='/projectspage'><button className="btn-home">MORE PROJECTS</button></a>
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


// Page

const ProjectPage = props => {
    const { title, image, description, demo, code, github, stack } = props.project;

    return (
        <div className='single-block-page'>
            <h1 className="sub-title-page ">{title}</h1>
            <a href={demo}><img src={image} alt="profile" className='single-img-page ' /></a>
            <h6 className="desText-page ">STACK: {stack}</h6>
            <p className='desText-page ' >{description}</p>
            <a href={code}><button className='btn-page ' >Code!</button></a>
            <a href={github}><button className='btn-page '  >GITHUB!</button></a>
            <br />
            <a href={demo}><button className='btn-page '>DEMO!</button></a>
        </div>
    )
}


export function ProjectsForPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div>
            <h2 class="title-page">Projects!</h2>
            <div>
                {
                    PROJECTS.map(PROJECT => (
                        <ProjectPage key={PROJECT.id} project={PROJECT} />
                    ))
                }
            </div>
            <hr />
            <a href="/homepage"><button className="btn-page">HOME</button></a>

        </div>
    )
}