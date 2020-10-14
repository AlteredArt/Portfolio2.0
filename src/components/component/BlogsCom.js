import React from 'react';
import BLOGS from '../../data/blogs';


const Blog = props => {
    const { title, image, description, link } = props.blog;
    return (
        <div className='single-block'>
            <h3 className="sub-title">{title}</h3>
            <img src={image} alt="profile" className='single-img' />
            <p className='text'>{description}</p>
            <a href={link}><button className='btn btn-dark' id='navtext' >Read Me!</button></a>
        </div>
    )
}



export default function BlogsHome(props) {
    return (
        <div>
            <h2 className="title">Blogs! <a href="/blogspage"><button className="btn btn-dark btn-text" id="navtext">MORE BLOGS</button></a></h2>
            <div>
                {
                    BLOGS.slice(0, 2).map(BLOG => {
                        return (
                            <Blog key={BLOG.id} blog={BLOG} />
                        )
                    })

                }
            </div>
            <hr />
        </div>
    )
}


export function BlogsForPage(props) {
    return (
        <div>
            <h2 className="title">Blogs! <a href="/"><button className="btn btn-dark btn-text" id="navtext">HOME</button></a></h2>

            <div>
                {
                    BLOGS.map(BLOG => {
                        return (
                            <Blog key={BLOG.id} blog={BLOG} />
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}