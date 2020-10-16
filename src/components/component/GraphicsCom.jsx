import React, { useEffect } from 'react';
import GRAPHICS from '../../data/graphics';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Graphic = props => {
    const { image } = props.graphic;

    return (
        <div className='single-block'>
            <a href={image}> <img src={image} alt="profile" className='single-img' /></a>
        </div>
    )
}




export default function GraphicsHome() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <h2 className="title">Graphics!</h2>
            <a href='/graphicspage'><button className="btn">MORE GRAPHICS</button></a>
            <div data-aos='flip-up'>
                {
                    GRAPHICS.slice(0, 2).map(GRAPHIC => (
                        <Graphic key={GRAPHIC.id} graphic={GRAPHIC} />
                    ))
                }
            </div>
            <hr data-aos='slide-left' />
        </div>
    )
}




export function GraphicsForPage() {
    return (
        <div>
            <h2 className="title">Graphics!</h2>
            <div>
                {
                    GRAPHICS.map(GRAPHIC => (
                        <Graphic key={GRAPHIC.id} graphic={GRAPHIC} />
                    ))
                }
            </div>
            <hr />
        </div>
    )
}