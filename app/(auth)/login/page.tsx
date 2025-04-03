import { redirect } from 'next/navigation'

import { LoginForm } from '@/features/auth/components/login-form'
import { getSession } from '@/lib/auth'

export default async function Page() {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  )
}
