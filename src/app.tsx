import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RoutesLD from './routes/Routes'
import { RouteLDObject } from './types/RoutesLD.intf';
import background from './assets/pictures/background-landing-page.jpg'
import Header from './layout/Header';
import MyRoute from './layout/MyRoute';
import Homepage from './pages/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
import Error404 from './pages/Error404';
import Smartphone from './components/Smartphone';

import './sass/main.scss'
import { PopupAlert, PopupProps } from './types/Components.intf';
import API from './services/Api';
import { AxiosError } from 'axios';
import { Config } from './config';


const App: FunctionComponent = () => {
  const homepage: RouteLDObject = RoutesLD.getRouteByName('home')
  const contact: RouteLDObject = RoutesLD.getRouteByName('contact')
  const about: RouteLDObject = RoutesLD.getRouteByName('about')
  const error404: RouteLDObject = RoutesLD.getRouteByName('error')


  const location = useLocation()
  const limitScrollMinifyHeader = 30
  const [bgLight, seBgLight] = useState<boolean>(false)
  const [minifyHeader, setMinifyHeader] = useState<boolean>(false)
  const [locationError, setLocationError] = useState<boolean>(false)
  const [bgLoaded, setBgLoaded] = useState<boolean>(false)
  const [formIsLoading, setFormIsLoading] = useState<boolean>(false)
  const [formAlert, setFormAlert] = useState<PopupProps>({type: PopupAlert.none, message: ''})
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [formPreregisterSuccess, setFormPreregisterSuccess] = useState<boolean>(false)
  const [formContactSuccess, setFormContactSuccess] = useState<boolean>(false)
  
  // onChange location route to transition CSS
  useEffect(() => {
    const locationHome = location.pathname !== '/'
    seBgLight(locationHome)
    setMinifyHeader(false)
    setLocationError( RoutesLD.getRouteByPathName(location.pathname) ? false : true)
  }, [location, locationError])

  useEffect(() => {
    if(showAlert) {
      const timer = setTimeout(() => {
        if(showAlert === true) setShowAlert(false)
        clearTimeout(timer)
      }, 12000)
    }
  }, [showAlert])

  // onScroll Calculate scroll Position
  const handleScroll = (scrollTop: number) => {
    if(scrollTop >= limitScrollMinifyHeader) {
      setMinifyHeader(true)
    } else {
      setMinifyHeader(false)
    }
  }

  const onSubmitPreRegister = async (formData: object, isValid: boolean) => {
    setFormIsLoading(true)
    setFormAlert({type: PopupAlert.none, message: ''})

    if(isValid) {
      const requestFunc = Config.demo ?  API.postPreRegisterUserDataMock : API.postPreRegisterUserData

      await requestFunc(formData)
        .then(() => {
          setFormAlert({
            type: PopupAlert.success,
            message: "Félicitations ! Tu fais partie des futur·e·s testeur·euse·s de l'application Case Tes Potes !  La Team te tiendra informé·e bientôt de la disponibilité de l'application !"
          })
          setFormPreregisterSuccess(true)
        })
        .catch((e: AxiosError) => {
          if(e.response?.status === 400) {
            setFormAlert({
              type: PopupAlert.alert,
              message: "Tu es déjà préinscrit·e en tant que testeur·euse de l'application Case Tes Potes ! La Team te tiendra informé·e bientôt de la disponibilité de l'application !"
            })         
          } else {
            setFormAlert({
              type: PopupAlert.alert,
              message: `Une erreur c'est produite lors de l'inscription, veuillez contacter l'administrateur`
            })
          }
        })
    } else {
      setFormAlert({
        type: PopupAlert.alert,
        message: `Certains champs comportent des erreurs dans le formulaire`
      })
    }
    setShowAlert(true)
    setFormIsLoading(false)
  }

  const onSubmitContact = async (formData: object, isValid: boolean) => {
    setFormIsLoading(true)
    setFormAlert({type: PopupAlert.none, message: ''})

    if(isValid) {
      await API.sendEmailContactMock(formData)
        .then(() => {
          setFormAlert({
            type: PopupAlert.success,
            message: `Votre message a bien été envoyé`
          })
          setFormContactSuccess(true)
        })
        .catch(() => {
          setFormAlert({
            type: PopupAlert.alert,
            message: `Une erreur serveur c'est produite, veuillez contacter l'administrateur`
          })          
        })
    } else {
      setFormAlert({
        type: PopupAlert.alert,
        message: `Certains champs comportent des erreurs dans le formulaire`
      })
    }

    setShowAlert(true)
    setFormIsLoading(false)
  }

  return (
    <div className={`background-app ${bgLight ? 'background-app--light' : 'background-app--dark'}`}>
      <div className={`popup-alert
        ${formAlert.type === PopupAlert.alert ? ' popup-alert--error' : ''}
        ${formAlert.type === PopupAlert.success ? ' popup-alert--success' : ''}
        ${formAlert.type === PopupAlert.warning ? ' popup-alert--warning' : ''}
        ${showAlert ? ' show' : ''}`
      }>
        {formAlert.message}
      </div>
      <Header minifyHeader={minifyHeader} />      
        <MyRoute path={homepage.path} themeLight={homepage.themeLight} callbackScroll={handleScroll} >
          <Homepage onSubmitPreRegister={onSubmitPreRegister} formIsLoading={formIsLoading} formSubmitIsValid={formPreregisterSuccess} />
        </MyRoute> 
        <MyRoute path={contact.path} themeLight={contact.themeLight} callbackScroll={handleScroll} >
          <Contact onSubmitContact={onSubmitContact} formIsLoading={formIsLoading} formSubmitIsValid={formContactSuccess} />
        </MyRoute>
        <MyRoute path={about.path} themeLight={about.themeLight} callbackScroll={handleScroll} >
          <About />
        </MyRoute> 
        { locationError ? (
        <MyRoute path={error404.path} themeLight={error404.themeLight} callbackScroll={handleScroll} > 
          <Error404 />
        </MyRoute>
        ) : null }
      <Smartphone locationPath={location.pathname} locationsAllow={[RoutesLD.getRouteByName('home').path]} />
      <div className={`bg-full-width ${bgLoaded ? 'bg-full-width--loaded' : ''}`}>
        <img onLoad={() => setBgLoaded(true)} width="500" src={background} alt="case tes potes lancement application"/>
      </div>      
    </div>
  );
}

export default App
