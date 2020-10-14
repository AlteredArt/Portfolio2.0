import React from 'react';
import PROJECTS from '../../data/projects';


const Project = props => {
    const { title, image, description, demo, code, github, stack } = props.project;

    return (
        <div className='single-block'>
            <h3 className="sub-title">{title}</h3>
            <img src={image} alt="profile" className='single-img' />
            <p className="text" >STACK: {stack}</p>
            <p className='text' >{description}</p>
            <a href={code}><button className='btn btn-dark' id='navtext' >Code!</button></a>
            <a href={github}><button className='btn btn-dark' id='navtext' >GITHUB!</button></a>
            <br />
            <a href={demo}><button className='btn btn-dark pro-btn' id='navtext' >DEMO!</button></a>


        </div>
    )
}



export default function ProjectsHome(props) {
    return (
        <div>
            <h2 className="title">Projects! <a href='/projectspage'><button className="btn btn-dark btn-text" id="navtext">MORE PROJECTS</button></a></h2>
            <div>
                {
                    PROJECTS.slice(0, 2).map(PROJECT => {
                        return (
                            <Project key={PROJECT.id} project={PROJECT} />
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}




export function ProjectsForPage(props) {
    return (
        <div id='projectspage'>
            <h2 className="title">Projects! <a href='/'><button className="btn btn-dark btn-text" id="navtext">HOME</button></a></h2>

            <div>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <Project key={PROJECT.id} project={PROJECT} />
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}