import Image from 'next/image'

import { signInGoogle } from '@/actions/auth'

import { Button } from '../ui/button'

export function GoogleLoginButton() {
  return (
    <form action={signInGoogle}>
      <Button variant="outline" className="w-full" type="submit">
        <Image
          src="./google-icon.svg"
          alt="Google Icon"
          width={18}
          height={18}
          className="mr-2"
        />
        Login with Google
      </Button>
    </form>
  )
}
