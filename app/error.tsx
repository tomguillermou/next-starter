'use client'

import { Navbar } from '@/components/navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Oops! Something went wrong 🤕</h1>
        <p className="text-muted-foreground">
          Please try again later or contact support if the problem persists.
        </p>
      </div>
    </>
  )
}
