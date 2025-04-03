import { betterAuth } from 'better-auth'
import { APIError } from 'better-auth/api'
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

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return session
}

export async function signInEmail(email: string, password: string) {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    })
  } catch (error) {
    if (error instanceof APIError) {
      return error.body.message
    }

    console.log(error)
    return 'Something went wrong. Please try again.'
  }
}

export async function signUpEmail(email: string, password: string) {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: email,
      },
    })
  } catch (error) {
    if (error instanceof APIError) {
      return error.body.message
    }

    console.log(error)
    return 'Something went wrong. Please try again.'
  }
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  })
}
