import { Navbar } from '@/components/navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Oops! Page not found 🤷‍♂️</h1>
      </div>
    </>
  )
}
