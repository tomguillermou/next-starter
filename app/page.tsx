'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

export default function Home() {
  const { data: session } = authClient.useSession()

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-12">
      <h1 className="text-2xl font-bold">Next Starter 🚀</h1>

      {session ? (
        <div className="flex items-center gap-4">
          <p>Logged in as {session.user.email}</p>

          <Button onClick={() => authClient.signOut()}>Logout</Button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      )}

      <div className="flex gap-4">
        <Link
          className="link-hover link underline"
          href="https://nextjs.org/docs"
          target="_blank"
        >
          Next.js
        </Link>
        <Link
          className="link-hover link underline"
          href="https://kysely.dev"
          target="_blank"
        >
          Kysely
        </Link>
        <Link
          className="link-hover link underline"
          href="https://better-auth.com"
          target="_blank"
        >
          Better Auth
        </Link>
      </div>
    </main>
  )
}
