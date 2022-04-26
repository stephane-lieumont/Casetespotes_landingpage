import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RoutesLD from './routes/Routes'

import background from './assets/pictures/background-landing-page.jpg'
import smartphone from './assets/pictures/smartphone_splashscreen.png'

import Header from './layout/Header';
import MyRoute from './layout/MyRoute';

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
    setMinifyHeader(false)
    const timer = setTimeout(() => {
      setHidePhone(locationHome)
      clearTimeout(timer)
    }, 700);
  }, [location])

  // onScroll Calculate scroll Position
  const handleScroll = (scrollTop: number) => {
    if(scrollTop >= limitScrollMinifyHeader) {
      setMinifyHeader(true)
    } else {
      setMinifyHeader(false)
    }
  }

  return (
    <div className={`background-app ${bgLight ? 'background-app--light' : 'background-app--dark'}`}>
      <Header minifyHeader={minifyHeader} />            
          { RoutesLD.map(({ path, name, themeLight, Component }) => (
            name !== 'error' ? (
              <MyRoute key={path} path={path} element={<Component />} themeLight={themeLight} callbackScroll={handleScroll} />                  
            ): null
          ))}
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
