import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-12">
      <h1 className="text-2xl font-bold">Next.js + Kysely Starter 🚀</h1>
      <div className="flex gap-4">
        <Link
          className="link-hover link"
          href="https://nextjs.org/docs"
          target="_blank"
        >
          Next.js
        </Link>
        <Link
          className="link-hover link"
          href="https://kysely.dev"
          target="_blank"
        >
          Kysely
        </Link>
      </div>
    </main>
  )
}
