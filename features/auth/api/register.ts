'use server'

import { APIError } from 'better-auth/api'

import { auth } from '@/lib/auth'

export const register = async (_: unknown, formData: FormData) => {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: email,
      },
    })

    return { success: true, error: null }
  } catch (error) {
    if (error instanceof APIError) {
      return { error: error.body.message }
    }
    return { error: 'Something went wrong. Please try again.' }
  }
}
