'use client'

import { signIn } from 'next-auth/react'

import { LogInIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { AuthProviders } from '@/lib/auth-providers'

export function AccessDenied() {
  async function handleLogin() {
    await signIn(AuthProviders.GOOGLE)
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-5">
      <div className="space-y-0.5 text-center">
        <h2 className="font-bold">Acesso Negado!</h2>
        <p className="text-sm opacity-60">
          Por favor, realize o login para acessar esta página.
        </p>
      </div>

      <Button type="button" aria-label="Login" onClick={handleLogin}>
        <LogInIcon className="size-4" />
        Fazer Login
      </Button>
    </div>
  )
}
