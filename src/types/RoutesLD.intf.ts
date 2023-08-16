export type RouteLDObject = {
  path: string;
  name: string;
  Component: React.FunctionComponent;
  Props?: object;
  label?: string;
  themeLight?: boolean;
};
