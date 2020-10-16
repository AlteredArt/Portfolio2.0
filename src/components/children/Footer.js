import React from 'react';
import '../../styles/children/Footer.css'
import SOCIALS from '../../data/socials';

const Social = props => {
    const { image, link } = props.social;
    return (
        <span style={{ margin: 10 }}>
            <a className='link' href={link}>
                <img className="icon-img" src={image} alt="social" />
            </a>
        </span >
    )
}



const Footer = () => (
    <div id='footer'>
        <h2 className="title"> Connect With Me!</h2>
        <div>
            {
                SOCIALS.map(SOCIAL => (
                    <Social key={SOCIAL.id} social={SOCIAL} />
                ))
            }
        </div>
    </div>
)


export default Footer;