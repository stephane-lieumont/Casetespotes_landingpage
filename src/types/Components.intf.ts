export type HeaderProps = {
  minifyHeader?:boolean
  load?:boolean
}

export type MyRouteProps = {
  path: string,
  element: React.ReactNode,
  themeLight?: boolean,
  callbackScroll?: CallableFunction
}