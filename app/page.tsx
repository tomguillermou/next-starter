import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-12">
      <h1 className="text-2xl font-bold">
        Next.js / Prisma / DaisyUI Starter 🚀
      </h1>
      <div className="flex gap-4">
        <Link
          className="link link-hover"
          href="https://nextjs.org/docs"
          target="_blank"
        >
          Next.js
        </Link>
        <Link
          className="link link-hover"
          href="https://www.prisma.io/docs/orm"
          target="_blank"
        >
          Prisma
        </Link>
        <Link
          className="link link-hover"
          href="https://daisyui.com/docs"
          target="_blank"
        >
          DaisyUI
        </Link>
      </div>
    </main>
  )
}
