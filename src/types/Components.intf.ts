export type HeaderProps = {
  minifyHeader?:boolean
}

export type MyRouteProps = {
  path: string,
  element: React.ReactNode,
  themeLight?: boolean,
  callbackScroll?: CallableFunction
}