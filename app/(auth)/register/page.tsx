import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { RegisterForm } from '@/features/auth/components/register-form'
import { auth } from '@/lib/auth'

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    redirect('/')
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  )
}
