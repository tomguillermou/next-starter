'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { authClient } from '@/lib/auth-client'

import { Button } from './ui/button'

export function Navbar() {
  const router = useRouter()

  const { data: session } = authClient.useSession()

  const handleLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/')
        },
      },
    })
  }

  return (
    <nav className="flex items-center justify-between border-b bg-white p-4">
      <h1 className="text-2xl font-bold">🚀 NextJS Starter</h1>

      <div className="flex items-center gap-4">
        {session && (
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        )}

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
