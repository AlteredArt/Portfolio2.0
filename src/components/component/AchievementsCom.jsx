import React, { useEffect } from 'react';
import ACHIEVEMENTS from '../../data/achievements'

import Aos from 'aos';
import 'aos/dist/aos.css'


const Achievement = props => {
    const { image } = props.achievement;

    return (
        <div className='single-block-home' >
            <a href={image}><img src={image} alt="achievement" className='single-img-home' /></a>
        </div>
    )
}



export default function AchievementsHome() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <div>
            <h2 className="title-home">Achievements!</h2>
            <a href='/achievementspage'><button className="btn-home" >MORE ACHIEVEMENTS</button></a>
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

//page
const AchievementPage = props => {
    const { image } = props.achievement;

    return (
        <div className='single-block-page' >
            <a href={image}><img src={image} alt="achievement" className='single-img-page' /></a>
        </div>
    )
}



export function AchievementsForPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <h2 className="title-page">Achievements!</h2>
            <div>
                {
                    ACHIEVEMENTS.map(ACHIEVEMENT => (
                        <AchievementPage key={ACHIEVEMENT.id} achievement={ACHIEVEMENT} />
                    ))
                }
            </div>
            <hr />
        </div>
    )
}