//done / pulls from social database and renders the footer
import React from 'react';
import SOCIALS from '../../data/socials';

//social render
const Social = props => (
    <a href={props.social.link}><img className="footer-icon" src={props.social.image} alt="social" /></a>
)


//footer 
export default function Footer() {
    return (
        <div>
            <h2 className="title-home"> Connect With Me!</h2>
            <div className='footer'>
                {
                    SOCIALS.map(SOCIAL => (
                        <Social key={SOCIAL.id} social={SOCIAL} />
                    ))
                }
            </div>
        </div>
    )
}