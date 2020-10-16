import React, { useEffect } from 'react';
import { ProjectsForPage } from '../components/component/ProjectsCom.js';

function ProjectsPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (<ProjectsForPage />);
}
export default ProjectsPage;