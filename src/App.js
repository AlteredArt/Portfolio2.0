// done displays intro / times out intro / redirects to home page
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// styles
import './styles/main/HomeSection.css'
import './styles/main/PageSection.css'
import './styles/children/Intro.css'
// components
import Intro from './components/children/IntroPage'

export default function App() {
  const [displayIntro, setDisplayIntro] = useState(true);


  // set timeout on display intro after 4 seconds
  useEffect(() => {
    if (displayIntro) {
      setTimeout(() => {
        setDisplayIntro(false)
      }, 5000)
    }
  }, [displayIntro])


  // display intro conditional
  // TODO: You can just return right here, don't need to introduce indirection
  return displayIntro ? (
    <Intro />
    ) : (
    //redirect to home page after intro
    //prevents intro from being replayed
    <Redirect to='/home' />
  );
}


