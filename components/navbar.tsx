import Link from 'next/link'

import { getSession } from '@/lib/auth'

import { LoginButton } from './auth/login-button'
import { LogoutButton } from './auth/logout-button'
import { RegisterButton } from './auth/register-button'

export async function Navbar() {
  const session = await getSession()

  return (
    <nav className="flex items-center justify-between border-b bg-white p-4">
      <h1 className="text-2xl font-bold">
        <Link href="/">🚀 NextJS Starter</Link>
      </h1>

      <div className="flex items-center gap-4">
        {session && <LogoutButton />}

        {!session && (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </div>
    </nav>
  )
}
