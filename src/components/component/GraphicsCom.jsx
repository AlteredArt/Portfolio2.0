import React, { useEffect } from 'react';
import GRAPHICS from '../../data/graphics';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Graphic = props => {
    const { image } = props.graphic;

    return (
        <div className='single-block-home '>
            <a href={image}> <img src={image} alt="profile" className='single-img-home' /></a>
        </div>
    )
}




export default function GraphicsHome() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <div>
            <h2 className="title-home">Graphics!</h2>
            <a href='/graphicspage'><button className="btn-home">MORE GRAPHICS</button></a>
            <div data-aos='fade-in'>
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

//page
const GraphicPage = props => {
    const { image } = props.graphic;

    return (
        <div className='single-block-page '>
            <a href={image}> <img src={image} alt="profile" className='single-img-page' /></a>
        </div>
    )
}




export function GraphicsForPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <h2 className="title-page">Graphics!</h2>
            <div>
                {
                    GRAPHICS.map(GRAPHIC => (
                        <GraphicPage key={GRAPHIC.id} graphic={GRAPHIC} />
                    ))
                }
            </div>
            <hr />
        </div>
    )
}