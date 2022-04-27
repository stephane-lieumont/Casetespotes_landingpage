import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RoutesLD from './routes/Routes'

import background from './assets/pictures/background-landing-page.jpg'


import Header from './layout/Header';
import MyRoute from './layout/MyRoute';
import Smartphone from './components/Smartphone';

import './sass/main.scss'
import Error404 from './pages/Error404';

const App: FunctionComponent = () => {
  const location = useLocation()
  const limitScrollMinifyHeader = 30
  const [bgLight, seBgLight] = useState<boolean>(false)
  const [minifyHeader, setMinifyHeader] = useState<boolean>(false)
  const [locationError, setLocationError] = useState<boolean>(false)

  // onChange location route to transition CSS
  useEffect(() => {
    const locationHome = location.pathname !== '/'
    seBgLight(locationHome)
    setMinifyHeader(false)
    setLocationError( RoutesLD.getRouteByPathName(location.pathname) ? false : true)
  }, [location, locationError])

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
      { !locationError ? 
          RoutesLD.routesLDO.map(({ path, name, themeLight, Component }) => (
          name !== 'error' ? (
            <MyRoute key={path} path={path} element={<Component />} themeLight={themeLight} callbackScroll={handleScroll} />                  
          ) : null
        )) : <MyRoute path='*' element={<Error404 />} />  
      }

      { !locationError ? (
        <Smartphone locationPath={location.pathname} locationsAllow={[RoutesLD.getRouteByName('home')!.path]} />
      ) : null}
      <div className="bg-full-width">
        <img width="500" src={background} alt="case tes potes lancement application"/>
      </div>      
    </div>
  );
}

export default App
