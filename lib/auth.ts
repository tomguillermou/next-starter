import { APIError } from 'better-auth/api'
import { betterAuth } from 'better-auth'
import { headers } from 'next/headers'
import { nextCookies } from 'better-auth/next-js'
import { pool } from './database'

export const auth = betterAuth({
  database: pool,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      scope: ['email', 'profile'],
    },
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

export async function getGoogleLoginUrl() {
  const { url } = await auth.api.signInSocial({
    body: {
      provider: 'google',
      errorCallbackURL: '/login',
    },
  })

  return url
}
