import React from 'react';
import GRAPHICS from '../../data/graphics';


const Graphic = props => {
    const { title, image } = props.graphic;

    return (
        <div className='single-block'>
            <img src={image} alt="profile" className='single-img' />
        </div>
    )
}




export default function GraphicsHome(props) {
    return (
        <div>
            <h2 className="title">Graphics! <a href='/graphicspage'><button className="btn btn-dark btn-text" id="navtext">MORE GRAPHICS</button></a></h2>
            <div>
                {
                    GRAPHICS.slice(0, 2).map(GRAPHIC => {
                        return (
                            <Graphic key={GRAPHIC.id} graphic={GRAPHIC} />
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}




export function GraphicsForPage(props) {
    return (
        <div id='graphicspage'>
            <h2 className="title">Graphics! <a href='/'><button className="btn btn-dark btn-text" id="navtext">HOME</button></a></h2>

            <div>
                {
                    GRAPHICS.map(GRAPHIC => {
                        return (
                            <Graphic key={GRAPHIC.id} graphic={GRAPHIC} />
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}