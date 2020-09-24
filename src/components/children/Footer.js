import React from 'react';
import SOCIALS from '../../data/social';

const Social = props => {

    const { image, link, title } = props.social;
    return (
        <span style={{ margin: 10 }}>
            <a id="icontext" className='link' href={link}><img className="icon" src={image} alt="social" style={{ margin: 5, width: 35, height: 35 }} /> {title}</a>

        </span >
    )
}



const Footer = () => (
    <div id='contact'>
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