import React from 'react';
import './styles/App.css'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Navbar from './components/Navbar'
import profile from './assets/profile.JPG';
import Titles from './components/Titles';
import Bio from './components/Bio';
import Quotes from './components/Quotes';

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <Navbar />
        <br />
        <h1>Jared Matta</h1>
        <h2>Full Stack Developer & Graphic Designer</h2>
        <img src={profile} alt="profile" className="profile" />
        <Titles />
        <Bio />
        <hr />
        < Projects />
        <hr />
        <Quotes />
        <hr />
        <Socials />
      </div >

    );
  }
}

export default App;
