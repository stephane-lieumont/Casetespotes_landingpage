import React, { FunctionComponent, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import background from './assets/pictures/background-landing-page.jpg'
import smartphone from './assets/pictures/smartphone_splashscreen.png'

import Header from './layout/Header';

import Homepage from './pages/Homepage';
import Error404 from './pages/Error404';
import About from './pages/About';

import './sass/main.scss'

const App: FunctionComponent = () => {
  const location = useLocation()

  const [hidePhone, setHidePhone] = useState<boolean>(location.pathname !== '/')
  const [bgLight, seBgLight] = useState<boolean>(location.pathname !== '/')

  useEffect(() => {
    seBgLight(location.pathname !== '/')
    const timer = setTimeout(() => {
      setHidePhone(location.pathname !== '/')
      clearTimeout(timer)
    }, 500);    
  }, [location])

  return (
    <div className={`background-app ${bgLight ? 'background-app--light' : 'background-app--dark'}`}>
      <Header/>      
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
            <Route path="/" element={<Homepage />} ></Route> 
            <Route path="/a-propos" element={<About />} ></Route>
            <Route path="*" element={<Error404 />} ></Route> 
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {!hidePhone && (
        <div className={`smartphone ${location.pathname === '/' ? 'smartphone--show' : 'smartphone--hide'}`}>
          <img width="200" src={smartphone} alt="case tes potes home screen"/>
        </div>
      )}
      <div className="bg-full-width">
        <img width="500" src={background} alt="case tes potes lancement application"/>
      </div>      
    </div>
  );
}

export default App
