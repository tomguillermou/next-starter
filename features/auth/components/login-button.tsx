import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function LoginButton() {
  return (
    <Button variant="outline" asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
