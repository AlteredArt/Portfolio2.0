import React from 'react';
import ACHIEVEMENTS from '../../data/achievements'


const Achievement = props => {
    const { title, image } = props.achievement;

    return (
        <div className='single-block' >
            <h3 className="sub-title">{title}</h3>
            <img src={image} alt="profile" className='single-img' />
        </div>
    )
}




export default function AchievementsHome(props) {
    return (
        <div>
            <h2 className="title">Achievements! <a href='/achievementspage'><button className="btn btn-dark btn-text" id="navtext">MORE ACHIEVEMENTS</button></a></h2>
            <div>
                {
                    ACHIEVEMENTS.slice(0, 2).map(ACHIEVEMENT => {
                        return (
                            <Achievement key={ACHIEVEMENT.id} achievement={ACHIEVEMENT} />
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}




export function AchievementsForPage(props) {
    return (
        <div id='achievementspage'>
            <h2 className="title">Achievements! <a href='/'><button className="btn btn-dark btn-text" id="navtext">HOME</button></a></h2>

            <div>
                {
                    ACHIEVEMENTS.map(ACHIEVEMENT => {
                        return (
                            <Achievement key={ACHIEVEMENT.id} achievement={ACHIEVEMENT} />
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}