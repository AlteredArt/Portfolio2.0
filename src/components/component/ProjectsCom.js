import React, { useEffect } from 'react';
import PROJECTS from '../../data/projects';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Project = props => {
    const { title, image, description, demo, code, github, stack } = props.project;

    return (
        <div className='single-block-home'>
            <h4 className="sub-title-home ">{title}</h4>
            <a href={demo}><img src={image} alt="profile" className='single-img-home ' /></a>
            <h6 className="stack-des-home ">STACK: {stack}</h6>
            <h6 className='desText-home ' >{description}</h6>
            <a href={code}><button className='btn-home ' >Code!</button></a>
            <a href={github}><button className='btn-home '  >GitHub!</button></a>
            <br />
            <a href={demo}><button className='btn-home '>Demo!</button></a>
        </div>
    )
}



export default function ProjectsHome() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    return (
        <div id='projects'>
            <h2 className="title-home">Projects! </h2>
            <a href='/projects'><button className="btn-more">MORE PROJECTS</button></a>
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
            <a href="/home"><button className="btn-page">HOME</button></a>

        </div>
    )
}