import Link from 'next/link'

import { Navbar } from '@/components/navbar'
import { getSession } from '@/lib/auth'

export default async function Home() {
  const session = await getSession()

  return (
    <>
      <Navbar />
      <main className="flex h-screen flex-col items-center justify-center gap-12">
        <h1 className="text-2xl font-bold">Next Starter 🚀</h1>

        {session && <p>Logged in as {session.user.email}</p>}

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
    </>
  )
}
