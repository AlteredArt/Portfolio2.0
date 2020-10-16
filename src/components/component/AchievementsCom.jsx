import React, { useEffect } from 'react';
import ACHIEVEMENTS from '../../data/achievements'

import Aos from 'aos';
import 'aos/dist/aos.css'


const Achievement = props => {
    const { image } = props.achievement;

    return (
        <div className='single-block' >
            <a href={image}><img src={image} alt="achievement" className='single-img' /></a>
        </div>
    )
}



export default function AchievementsHome() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <h2 className="title">Achievements!</h2>
            <a href='/achievementspage'><button className="btn" >MORE ACHIEVEMENTS</button></a>
            <div data-aos='fade-up-left'>
                {
                    ACHIEVEMENTS.slice(0, 2).map(ACHIEVEMENT => (
                        <Achievement key={ACHIEVEMENT.id} achievement={ACHIEVEMENT} />
                    ))
                }
            </div>
            <hr data-aos="slide-right" />
        </div>
    )
}




export function AchievementsForPage() {
    return (
        <div>
            <h2 className="title">Achievements!</h2>
            <div>
                {
                    ACHIEVEMENTS.map(ACHIEVEMENT => (
                        <Achievement key={ACHIEVEMENT.id} achievement={ACHIEVEMENT} />
                    ))
                }
            </div>
            <hr />
        </div>
    )
}