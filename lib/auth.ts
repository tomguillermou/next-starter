import { betterAuth } from 'better-auth'

import { pool } from './database'

export const auth = betterAuth({
  database: pool,
  emailAndPassword: {
    enabled: true,
  },
})
