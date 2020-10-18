import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
//Main
import './styles/index.css'
import App from './App';
import NavBar from './components/children/Navbar';
import Footer from './components/children/Footer'
//Routes
import { ProjectsForPage } from './components/component/ProjectsCom'
import { BlogsForPage } from './components/component/BlogsCom'
import { AchievementsForPage } from './components/component/AchievementsCom'
import { GraphicsForPage } from './components/component/GraphicsCom'

import QuotesPage from './Pages/QuotesPage';
import HomePage from './Pages/HomePage'

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/homepage' component={HomePage} />
            <Route path='/projectspage' render={() => <NavBar><ProjectsForPage /><Footer /></NavBar>} />
            <Route path='/blogspage' render={() => <NavBar><BlogsForPage /><Footer /></NavBar>} />
            <Route path='/quotespage' render={() => <NavBar><QuotesPage /><Footer /></NavBar>} />
            <Route path='/achievementspage' render={() => <NavBar><AchievementsForPage /><Footer /></NavBar>} />
            <Route path='/graphicspage' render={() => <NavBar><GraphicsForPage /><Footer /></NavBar>} />
        </Switch>
    </Router>,
    document.getElementById('root'));

