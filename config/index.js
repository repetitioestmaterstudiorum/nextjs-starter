const isProduction = process.env.NODE_ENV === 'production'

export const server = isProduction ? '...' : 'http://localhost:3000'
