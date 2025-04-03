import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function RegisterButton() {
  return (
    <Button asChild>
      <Link href="/register">Register</Link>
    </Button>
  )
}
