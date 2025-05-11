'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useActionState } from 'react'

import { login } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { GoogleLoginButton } from './google-login-button'

export function LoginForm() {
  const [error, formAction, pending] = useActionState(login, undefined)

  return (
    <div className="grid gap-4">
      <Link href="/" className="text-center text-2xl font-bold">
        🏠 Home
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form action={formAction} className="grid gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button className="w-full" type="submit" disabled={pending}>
              {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </form>

          <GoogleLoginButton />

          <div className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="underline underline-offset-4">
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
