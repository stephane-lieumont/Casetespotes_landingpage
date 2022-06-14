import React from "react"

export type HeaderProps = {
  minifyHeader?:boolean
  load?:boolean
}

export type MyRouteProps = {
  path: string,
  themeLight?: boolean,
  children?: React.ReactElement
  callbackScroll?: CallableFunction,
}

export enum PopupAlert {
  none,
  alert,
  warning,
  success
}

export type PopupProps = {
  type?: PopupAlert,
  message?: string,
  fadeout?: boolean
}