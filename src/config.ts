type AppConfig = {
  addressApi: string
  demo?: boolean | string
}

const Config: AppConfig = {
  addressApi: `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
  demo: process.env.REACT_APP_DEMO
}

export { Config }