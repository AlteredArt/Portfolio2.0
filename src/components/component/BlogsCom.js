import React, { useEffect } from 'react';
import BLOGS from '../../data/blogs';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Blog = props => {
    const { title, image, description, link } = props.blog;
    return (
        <div className='single-block'>
            <h1 className="sub-title">{title}</h1>
            <a href={link}><img src={image} alt="profile" className='single-img' /></a>
            <h3 className='desText'>{description}</h3>
            <a href={link}><button className='btn' >Read Me!</button></a>
        </div>
    )
}



export default function BlogsHome() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div>
            <h2 className="title">Blogs!</h2>
            <a href="/blogspage"><button className="btn">MORE BLOGS</button></a>
            <div data-aos='fade-up-right'>
                {
                    BLOGS.slice(0, 2).map(BLOG => (
                        <Blog key={BLOG.id} blog={BLOG} />
                    ))
                }
            </div>
            <hr data-aos='slide-left' />
        </div>
    )
}


export function BlogsForPage() {
    return (
        <div>
            <h2 className="title">Blogs!</h2>
            <div>
                {
                    BLOGS.map(BLOG => (
                        <Blog key={BLOG.id} blog={BLOG} />
                    ))
                }
            </div>
            <hr />
        </div>
    )
}