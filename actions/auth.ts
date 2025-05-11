'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

import {
  getGoogleLoginUrl,
  signInEmail,
  signOut,
  signUpEmail,
} from '@/lib/auth'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

const registerSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one digit'),
})

export async function login(prevState: unknown, formData: FormData) {
  const { error, data } = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (error) {
    return error.issues[0].message
  }

  const loginError = await signInEmail(data.email, data.password)

  if (loginError) {
    return loginError
  }

  redirect('/')
}

export async function register(prevState: unknown, formData: FormData) {
  const { error, data: user } = registerSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (error) {
    return error.issues[0].message
  }

  const registerError = await signUpEmail(user.email, user.password)

  if (registerError) {
    return registerError
  }

  redirect('/')
}

export async function logout() {
  await signOut()

  redirect('/')
}

export async function signInGoogle() {
  const url = await getGoogleLoginUrl()

  if (url) {
    redirect(url)
  }
}
