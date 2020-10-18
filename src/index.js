// done / main import / sets up routes
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
//Main
import './styles/main/index.css'
import App from './App';
import NavBar from './components/children/Navbar';
import Footer from './components/children/Footer'
//Routes
import { ProjectsForPage } from './components/component/ProjectsCom'
import { BlogsForPage } from './components/component/BlogsCom'
import { AchievementsForPage } from './components/component/AchievementsCom'
import { GraphicsForPage } from './components/component/GraphicsCom'
import { QuotesPage } from './components/component/QuotesCom';
import HomePage from './components/home/HomePage'

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/home' component={HomePage} />
            <Route path='/projects' render={() => <NavBar><ProjectsForPage /><Footer /></NavBar>} />
            <Route path='/blogs' render={() => <NavBar><BlogsForPage /><Footer /></NavBar>} />
            <Route path='/quotes' render={() => <NavBar><QuotesPage /><Footer /></NavBar>} />
            <Route path='/achievements' render={() => <NavBar><AchievementsForPage /><Footer /></NavBar>} />
            <Route path='/graphics' render={() => <NavBar><GraphicsForPage /><Footer /></NavBar>} />
        </Switch>
    </Router>,
    document.getElementById('root'));

