import React, { useEffect } from 'react';
import { GraphicsForPage } from '../components/component/GraphicsCom';

export default function GraphicsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (<GraphicsForPage />)
}
