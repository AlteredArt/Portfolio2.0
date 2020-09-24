import React from 'react';
import PROJECTS from '../../data/projects';

const Project = props => {
    const { title, image, description, link, stack } = props.project;
    return (
        <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
            <h3 className="sub-title">{title}</h3>

            <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
            <p className="text" >STACK: {stack}</p>
            <p className='text'>{description}</p>
            <a className='link' href={link}>DEMO</a><br />
            <a className='link' href={link}>CODE</a><br />
            <a className='link' href={link}>GITHUB</a>
        </div>
    )
}



const Projects = props => (
    <div>
        <h2 className="title"> Highlighted Projects!</h2>
        <div>
            {
                PROJECTS.map(PROJECT => {
                    return (
                        <Project key={PROJECT.id} project={PROJECT} />
                    )
                })
            }

        </div>
        <br />

        <a href='/projects'><button className="btn btn-dark" id="navtext">MORE PROJECTS</button></a>
        <br />
        <br />
    </div>
)


export default Projects;