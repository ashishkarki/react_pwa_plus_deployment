// log to console, only in development mode
export const logger = (message) => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'dev'
  ) {
    console.log(message)
  }
}
