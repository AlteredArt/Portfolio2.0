import React, { useEffect } from 'react';
import BLOGS from '../../data/blogs';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Blog = props => {
    const { title, image, description, link } = props.blog;
    return (
        <div className='single-block-home '>
            <h1 className="sub-title-home">{title}</h1>
            <a href={link}><img src={image} alt="profile" className='single-img-home' /></a>
            <h3 className='desText-home '>{description}</h3>
            <a href={link}><button className='btn-home ' >Read Me!</button></a>
        </div>
    )
}



export default function BlogsHome() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <div>
            <h2 className="title-home">Blogs!</h2>
            <a href="/blogspage"><button className="btn-home">MORE BLOGS</button></a>
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
//page
const BlogPage = props => {
    const { title, image, description, link } = props.blog;
    return (
        <div className='single-block-page single-block-page'>
            <h1 className="sub-title-page sub-title-page">{title}</h1>
            <a href={link}><img src={image} alt="profile" className='single-img-page single-img-page' /></a>
            <h3 className='desText-page desText-page'>{description}</h3>
            <a href={link}><button className='btn-page btn-page' >Read Me!</button></a>
        </div>
    )
}

export function BlogsForPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <h2 className="title-page">Blogs!</h2>
            <div>
                {
                    BLOGS.map(BLOG => (
                        <BlogPage key={BLOG.id} blog={BLOG} />
                    ))
                }
            </div>
            <hr />
        </div>
    )
}