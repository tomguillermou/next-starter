'use server'

import { APIError } from 'better-auth/api'

import { auth } from '@/lib/auth'

export const login = async (_: unknown, formData: FormData) => {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    })

    return { success: true, error: null }
  } catch (error) {
    if (error instanceof APIError) {
      return { success: false, error: error.body.message }
    }
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
