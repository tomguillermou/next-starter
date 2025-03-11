'use server'

import { APIError } from 'better-auth/api'

import { auth } from '@/lib/auth'

export const register = async (_: unknown, formData: FormData) => {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!isPasswordValid(password)) {
      return { success: false, error: 'Password is not valid' }
    }

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
      return { success: false, error: error.body.message }
    }
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}

const isPasswordValid = (password: string) => {
  const minimumLength = 8
  const digitRegex = new RegExp('[0-9]+')
  const uppercaseRegex = new RegExp('[A-Z]+')

  return (
    password.length >= minimumLength &&
    digitRegex.test(password) &&
    uppercaseRegex.test(password)
  )
}
