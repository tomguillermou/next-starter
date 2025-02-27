import { betterAuth } from 'better-auth'
import { nextCookies } from 'better-auth/next-js'

import { pool } from './database'

export const auth = betterAuth({
  database: pool,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
})
