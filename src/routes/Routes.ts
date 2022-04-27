import Homepage from "../pages/HomePage"
import Contact  from "../pages/Contact"
import About from "../pages/About"
import Error404 from '../pages/Error404';
import { RouteLDObject } from "../types/RoutesLD.intf";

const routesLDO: RouteLDObject[] = [
  { 
    path: '/', 
    name: 'home',
    Component: Homepage,
    label: 'Pré-inscription'
  },
  { 
    path: '/a-propos-de-case-tes-potes', 
    name: 'about',
    Component: About,
    label: 'A propos',
    themeLight: true
  },
  { 
    path: '/contact',
    name: 'contact',
    Component: Contact,
    label: 'Contact',
    themeLight: true
  },
  {
    path: '*',
    name: 'error',
    Component: Error404
  },
  {
    path: '/erreur-page-introuvable',
    name: 'error404',
    Component: Error404
  }
]

const getRouteByName = (name: string):RouteLDObject | undefined => {
  return routesLDO.find(route => route.name === name)
}

const getRouteByPathName = (pathname: string):RouteLDObject | undefined => {
  return routesLDO.find(route => route.path === pathname)
}

const RoutesLD = {
  routesLDO,
  getRouteByName,
  getRouteByPathName
}

export default RoutesLD