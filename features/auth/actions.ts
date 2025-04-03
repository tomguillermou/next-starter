'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

import { signInEmail, signOut, signUpEmail } from '@/lib/auth'

const userSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one digit'),
})

export const login = async (prevState: unknown, formData: FormData) => {
  try {
    const { error, data: user } = userSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    })

    if (error) {
      return 'Invalid credentials'
    }

    await signInEmail(user.email, user.password)
  } catch (error) {
    console.error(error)
    return 'Something went wrong. Please try again.'
  }
}

export const register = async (prevState: unknown, formData: FormData) => {
  try {
    const { error, data: user } = userSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    })

    if (error) {
      return 'Invalid credentials'
    }

    await signUpEmail(user.email, user.password)
  } catch (error) {
    console.error(error)
    return 'Something went wrong. Please try again.'
  }
}

export const logout = async () => {
  await signOut()

  redirect('/')
}
