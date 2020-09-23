import React from 'react';
import SOCIALS from '../data/social';

const Social = props => {

    const { image, link } = props.social;
    return (
        <span style={{ margin: 10 }}>
            <a href={link}><img src={image} alt="social" style={{ width: 35, height: 35 }} /></a>
        </span>
    )
}



const Socials = props => (
    <div>
        <h2> Connect With Me</h2>
        <div>
            {
                SOCIALS.map(SOCIAL => {
                    return (
                        <Social key={SOCIAL.id} social={SOCIAL} />
                    )
                })
            }
        </div>

    </div>
)

export default Socials;