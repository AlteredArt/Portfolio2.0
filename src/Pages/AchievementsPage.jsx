import React, { useEffect } from 'react';
import { AchievementsForPage } from '../components/component/AchievementsCom';

export default function AchievementsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (<AchievementsForPage />)
}
