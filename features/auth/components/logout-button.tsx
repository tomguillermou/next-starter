import { Button } from '@/components/ui/button'

import { logout } from '../actions'

export function LogoutButton() {
  return (
    <form action={logout}>
      <Button type="submit" variant="outline">
        Logout
      </Button>
    </form>
  )
}
