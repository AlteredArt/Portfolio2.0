import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
//Main
import "./styles/index.css"
import App from './App';
import NavBar from './components/children/Navbar';
//Routes
import Projects from './components/component/Projects'
import Blogs from './components/component/Blogs'
import Graphics from './components/component/Graphics'
import Quotes from './components/component/Quotes'


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <NavBar><App /></NavBar>} />
            <Route path='/projects' render={() => <NavBar><Projects /></NavBar>} />
            <Route path='/blogs' render={() => <NavBar><Blogs /></NavBar>} />
            <Route path='/graphics' render={() => <NavBar><Graphics /></NavBar>} />
            <Route path='/quotes' render={() => <NavBar><Quotes /></NavBar>} />

        </Switch>
    </Router>,
    document.getElementById('root'));
