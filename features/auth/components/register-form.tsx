'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'

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

import { register } from '../api/register'

export function RegisterForm() {
  const router = useRouter()

  const [state, formAction, isPending] = useActionState(register, {
    success: false,
    error: null,
  })

  useEffect(() => {
    if (state.success) {
      router.push('/')
    }
  }, [state, router])

  return (
    <div className="flex flex-col gap-6">
      <Link href="/" className="text-center text-2xl font-bold">
        🏠 Home
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your email below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                />

                <p className="text-xs text-muted-foreground">
                  Password should be at least 8 characters including a number
                  and an uppercase letter.
                </p>
              </div>

              {state.error && (
                <p className="text-sm text-destructive">{state.error}</p>
              )}

              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Register
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
