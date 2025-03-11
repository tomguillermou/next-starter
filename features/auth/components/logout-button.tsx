'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

export function LogoutButton() {
  const router = useRouter()

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
    <Button variant="outline" onClick={handleLogout}>
      Logout
    </Button>
  )
}
