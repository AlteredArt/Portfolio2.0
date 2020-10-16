import React, { useEffect } from 'react';
import { BlogsForPage } from '../components/component/BlogsCom';


export default function BlogsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (<BlogsForPage />)
}
