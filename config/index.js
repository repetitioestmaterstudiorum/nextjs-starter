const isProduction = process.env.NODE_ENV === 'production'

export const server = isProduction ? process.env.LIVE_URL : 'http://localhost:3000'
