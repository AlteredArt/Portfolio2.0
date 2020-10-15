import React, { useState } from 'react';
import './styles/components/Sections.css'
import logo from './assets/logo.svg';
import './styles/children/Intro.css'


import ProfilePic from './assets/images/profile.JPG';
import TitlesHome from './components/home/TitlesHome';
import BioHome from './components/home/BioHome';

import ProjectsHome from './components/component/ProjectsCom';
import BlogsHome from './components/component/BlogsCom';
import QuotesHome from './components/component/QuotesCom';
import AchievementsHome from './components/component/AchievementsCom';
import GraphicsHome from './components/component/GraphicsCom';
import Footer from './components/children/Footer';
// import Intro from './components/children/Intro'
import NavBar from './components/children/Navbar';

// class App extends React.Component {
// state = { displayIntro: true }

// toggleDisplayIntro = () => { this.setState({ displayIntro: false }) }
// render() {

export default function App() {
  const [displayIntro, setDisplayIntro] = useState(true);

  // useEffect(() => {
  //   console.log(displayIntro)
  // })

  if (displayIntro) {
    setTimeout(() => {
      setDisplayIntro(false)
    }, 6000)
  }

  let intro = displayIntro ? (
    <div className='intro-div'>
      <br />
      <h1 className='intro-title'>
        Welcome to my React<br />
        <br />
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        <span>F</span>
        <span>O</span>
        <span>L</span>
        <span>I</span>
        <span>O</span>
        <span>:</span>
        <span>2</span>
        <span>.</span>
        <span>0</span>
      </h1>
      <br />
      <br />
      <br />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  ) : (
      <div div className="App" div='true' >
        <NavBar />
        <h1 className="title">Full Stack Developer & Graphic Designer</h1>
        <TitlesHome />
        <img src={ProfilePic} alt="profile" className='profilePic' />
        <p style={{ color: "white", fontSize: 40 }}>My Cats help me Code!</p>
        <BioHome />
        <hr />
        <ProjectsHome />
        <BlogsHome />
        <AchievementsHome />
        <GraphicsHome />
        <QuotesHome />
        <Footer />
      </div>
    );
  return (
    [intro]
  );
}

  // }
// }

// export default App;


