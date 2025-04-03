'use server'

import { auth } from '@/lib/auth'

export const register = async (prevState: unknown, formData: FormData) => {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!isPasswordValid(password)) {
      return 'Password is not valid'
    }

    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: email,
      },
    })
  } catch (error) {
    console.error(error)

    return 'Something went wrong. Please try again.'
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
