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
import ProjectsPage from './Pages/ProjectsPage'
import BlogsPage from './Pages/BlogsPage';
import QuotesPage from './Pages/QuotesPage';
import AchievementsPage from './Pages/AchievementsPage'
import GraphicsPage from './Pages/GraphicsPage'
import HomePage from './Pages/HomePage'

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/homepage' component={HomePage} />
            <Route path='/projectspage' render={() => <NavBar><ProjectsPage /><Footer /></NavBar>} />
            <Route path='/blogspage' render={() => <NavBar><BlogsPage /><Footer /></NavBar>} />
            <Route path='/quotespage' render={() => <NavBar><QuotesPage /><Footer /></NavBar>} />
            <Route path='/achievementspage' render={() => <NavBar><AchievementsPage /><Footer /></NavBar>} />
            <Route path='/graphicspage' render={() => <NavBar><GraphicsPage /><Footer /></NavBar>} />
        </Switch>
    </Router>,
    document.getElementById('root'));

