import React from 'react';
import './styles/components/Sections.css'

import ProfilePic from './assets/images/profile.JPG';
import TitlesHome from './components/home/TitlesHome';
import BioHome from './components/home/BioHome';

import ProjectsHome from './components/component/ProjectsCom';
import BlogsHome from './components/component/BlogsCom';
import QuotesHome from './components/component/QuotesCom';
import AchievementsHome from './components/component/AchievementsCom';
import GraphicsHome from './components/component/GraphicsCom';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <h1 className="title">Full Stack Developer & Graphic Designer</h1>
        <TitlesHome />
        <img src={ProfilePic} alt="profile" class='profilePic' />
        <p style={{ color: "white", fontSize: 40 }}>My Cats help me Code!</p>
        <BioHome />
        <hr />
        <ProjectsHome />
        <BlogsHome />
        <AchievementsHome />
        <GraphicsHome />
        <QuotesHome />
      </div>
    );
  }
}

export default App;


