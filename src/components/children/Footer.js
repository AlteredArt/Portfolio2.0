import React from 'react';
import '../../styles/children/Footer.css'
import SOCIALS from '../../data/socials';

const Social = props => {
    const { image, link, title } = props.social;
    return (
        <span style={{ margin: 10 }}>
            <a
                id="icon-text"
                className='link'
                href={link}
            >
                <img
                    className="icon-img"
                    src={image} alt="social"
                /> {title}
            </a>
        </span >
    )
}



const Footer = () => (
    <div id='contact'>
        <a href="/"><button className="btn btn-dark btn-text" id="navtext">HOME</button></a>


        <h2 className="title"> Connect With Me!</h2>
        <br />
        <div>
            {
                SOCIALS.map(SOCIAL => {
                    return (
                        <Social key={SOCIAL.id} social={SOCIAL} />
                    )
                })
            }
        </div>
        <br />
    </div>
)


export default Footer;