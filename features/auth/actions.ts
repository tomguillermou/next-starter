'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'

export const login = async (prevState: unknown, formData: FormData) => {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    })
  } catch (error) {
    console.error(error)

    return 'Something went wrong. Please try again.'
  }
}

export const logout = async () => {
  await auth.api.signOut({
    headers: await headers(),
  })

  redirect('/')
}
