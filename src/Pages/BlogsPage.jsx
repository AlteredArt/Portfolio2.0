import React from 'react';
import BlogsCom, { BlogsForPage } from '../components/component/BlogsCom';

class BlogsPage extends React.Component {
    render() {
        return (
            <div >
                <BlogsForPage />
            </div>
        );
    }
}

export default BlogsPage;