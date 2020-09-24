import React from 'react';
import './styles/App.css'

import Footer from './components/children/Footer'
import ProfilePic from './assets/images/profile.JPG';

import ProjectsHome from './components/home/ProjectsHome'
import TitlesHome from './components/home/TitlesHome';
import BioHome from './components/home/BioHome';
import QuotesHome from './components/home/QuotesHome';
import BlogsHome from './components/home/BlogsHome'

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <br />
        <h1 className="title">Full Stack Developer & Graphic Designer</h1>
        <TitlesHome />
        <img src={ProfilePic} alt="profile" className="profile-pic" />
        <p style={{ color: "white", fontSize: 40 }}>My Cats help me Code!</p>
        <BioHome />
        <br />
        <hr />
        <br />
        <ProjectsHome />
        <hr />
        <br />
        <BlogsHome />
        <hr />
        <br />
        <QuotesHome />
        <br />
        <hr />
        <br />
        <Footer />
      </div >

    );
  }
}

export default App;
