import React from "react";

import Homepage from "../pages/HomePage"
import Contact  from "../pages/Contact"
import About from "../pages/About"
import Error404 from '../pages/Error404';

type RouteLDObject = {
  path: string,
  name: string,
  Component: React.FunctionComponent,
  label?: string,
  themeLight?: boolean
}


const RoutesLD: RouteLDObject[] = [
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
  }
]

export default RoutesLD