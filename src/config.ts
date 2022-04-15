type AppConfig = {
  addressApi: string
}

const Config: AppConfig = {
  addressApi: `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`
}

export { Config }