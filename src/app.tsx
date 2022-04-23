import React, { FunctionComponent, useEffect, useState, UIEvent } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import background from './assets/pictures/background-landing-page.jpg'
import smartphone from './assets/pictures/smartphone_splashscreen.png'

import Header from './layout/Header';

import Error404 from './pages/Error404';
// import About from './pages/About';
import Homepage from './pages/HomePage';

import './sass/main.scss'

const App: FunctionComponent = () => {
  const location = useLocation()
  const limitScrollMinifyHeader = 100
  const [hidePhone, setHidePhone] = useState<boolean>(true)
  const [bgLight, seBgLight] = useState<boolean>(false)
  const [minifyHeader, setMinifyHeader] = useState<boolean>(false)

  // onChange location route to transition CSS
  useEffect(() => {
    const locationHome = location.pathname !== '/'
    seBgLight(locationHome)
    const timer = setTimeout(() => {
      setHidePhone(locationHome)
      clearTimeout(timer)
    }, 700);    
  }, [location])

  // onScroll Calculate scroll Position
  const handleScroll = (e: UIEvent) => {
    if(e.currentTarget.scrollTop >= limitScrollMinifyHeader) {
      setMinifyHeader(true)
    } else {
      setMinifyHeader(false)
    }
  }

  return (
    <div className={`background-app ${bgLight ? 'background-app--light' : 'background-app--dark'}`}>
      <Header minifyHeader={minifyHeader} />      
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <div className="page" onScroll={handleScroll}>
            <Routes location={location}>
              <Route path="/" element={<Homepage />} ></Route> 
              {/*<Route path="/a-propos" element={<About />} ></Route>*/}
              <Route path="*" element={<Error404 />} ></Route> 
            </Routes>
          </div>
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
