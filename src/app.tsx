import React, { Fragment, FunctionComponent } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import background from './assets/pictures/background-landing-page.jpg'
import smartphone from './assets/pictures/smartphone_splashscreen.png'

import Footer from './layout/Footer';
import Header from './layout/Header';

import Homepage from './pages/Homepage';
import About from './pages/About';

import './sass/main.scss'

const App: FunctionComponent = () => {
  const location = useLocation()

  return (
    <Fragment>
      <Header/>
      <main>
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Routes location={location}>
                <Route path="/" element={<Homepage />} ></Route> 
                <Route path="/a-propos" element={<About />} ></Route> 
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          <div className="smartphone">
            <img width="200" src={smartphone} alt="case tes potes home screen"/>
          </div>
          <div className="bg-full-width">
            <img width="500" src={background} alt="case tes potes lancement application"/>
          </div>
      </main>

      <Footer/>  
    </Fragment>
  );
}

export default App
