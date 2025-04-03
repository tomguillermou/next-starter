import { betterAuth } from 'better-auth'
import { nextCookies } from 'better-auth/next-js'
import { headers } from 'next/headers'

import { pool } from './database'

export const auth = betterAuth({
  database: pool,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
})

export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return session
}

export const signInEmail = async (email: string, password: string) => {
  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  })
}

export const signUpEmail = async (email: string, password: string) => {
  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name: email,
    },
  })
}

export const signOut = async () => {
  await auth.api.signOut({
    headers: await headers(),
  })
}
