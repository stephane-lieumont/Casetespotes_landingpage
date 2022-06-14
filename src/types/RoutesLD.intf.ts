export type RouteLDObject = {
  path: string,
  name: string,
  Component: React.FunctionComponent,
  Props?: Object
  label?: string,
  themeLight?: boolean
}