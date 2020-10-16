import React, { useState, useEffect } from 'react';
import './styles/components/Sections.css'
import './styles/children/Intro.css'
import Intro from './components/home/IntroPage'
import { Redirect } from 'react-router-dom';

export default function App() {
  const [displayIntro, setDisplayIntro] = useState(true);

  useEffect(() => {
    if (displayIntro) {
      setTimeout(() => {
        setDisplayIntro(false)
      }, 5000)
    }
  }, [displayIntro])


  let intro = displayIntro ? (
    <Intro />
  ) : (
      <Redirect to='/homepage' />
    );

  return ([intro]);
}


