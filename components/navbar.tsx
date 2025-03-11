'use client'

import Link from 'next/link'

import { LogoutButton } from '@/features/auth/components/logout-button'
import { authClient } from '@/lib/auth-client'

import { Button } from './ui/button'

export function Navbar() {
  const { data: session } = authClient.useSession()

  return (
    <nav className="flex items-center justify-between border-b bg-white p-4">
      <h1 className="text-2xl font-bold">🚀 NextJS Starter</h1>

      <div className="flex items-center gap-4">
        {session && <LogoutButton />}

        {!session && (
          <>
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  )
}
