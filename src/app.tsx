import React, { FunctionComponent, useEffect, useState, UIEvent } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import background from './assets/pictures/background-landing-page.jpg'
import smartphone from './assets/pictures/smartphone_splashscreen.png'

import Header from './layout/Header';

import Error404 from './pages/Error404';
import Homepage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';

import './sass/main.scss'

const App: FunctionComponent = () => {
  const location = useLocation()
  const limitScrollMinifyHeader = 100
  const scrollPage = React.useRef<HTMLDivElement>(null)
  const [hidePhone, setHidePhone] = useState<boolean>(true)
  const [bgLight, seBgLight] = useState<boolean>(false)
  const [minifyHeader, setMinifyHeader] = useState<boolean>(false)

  // onChange location route to transition CSS
  useEffect(() => {
    const locationHome = location.pathname !== '/'
    seBgLight(locationHome)
    checkMinifyHeader(scrollPage.current!.scrollTop)
    const timer = setTimeout(() => {
      setHidePhone(locationHome)
      clearTimeout(timer)
    }, 700);
  }, [location])

  // onScroll Calculate scroll Position
  const handleScroll = (e: UIEvent) => {
    checkMinifyHeader(e.currentTarget.scrollTop)
  }

  const checkMinifyHeader = (scrollTop: number) => {
    if(scrollTop >= limitScrollMinifyHeader) {
      setMinifyHeader(true)
    } else {
      setMinifyHeader(false)
    }
  }

  return (
    <div className={`background-app ${bgLight ? 'background-app--light' : 'background-app--dark'}`}>
      <Header minifyHeader={minifyHeader} />      
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={200} classNames="fade">
          <div ref={scrollPage} className={`page ${bgLight ? 'page--light' : '' }`} onScroll={handleScroll}>
            <Routes location={location}>
              <Route path="/" element={<Homepage />} ></Route> 
              <Route path="/contact" element={<Contact />} ></Route> 
              <Route path="/a-propos" element={<About />} ></Route>
              <Route path="*" element={<Error404 />} ></Route> 
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      {!hidePhone && (
        <div className={`smartphone ${!bgLight ? 'smartphone--show' : 'smartphone--hide'}`}>
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
