'use client'

import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Header() {
  const { data: session, status } = useSession()

  async function handleLogin() {
    await signIn()
  }

  async function handleLogout() {
    await signOut()
  }

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button aria-label="Toggle Menu" size="icon" variant="outline">
            <MenuIcon className="size-4" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === 'authenticated' && session.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {session.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {session.user.image && (
                    <AvatarImage src={session.user.image} />
                  )}
                </Avatar>

                <div className="flex flex-col">
                  <p className="font-medium">{session.user.name}</p>
                  <p className="text-sm opacity-75">Boas compras!</p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === 'unauthenticated' && (
              <Button
                variant="outline"
                className="justify-start gap-2"
                onClick={handleLogin}
              >
                <LogInIcon className="size-4" />
                Fazer Login
              </Button>
            )}

            {status === 'authenticated' && (
              <Button
                variant="outline"
                className="justify-start gap-2"
                onClick={handleLogout}
              >
                <LogInIcon className="size-4" />
                Sair
              </Button>
            )}

            <Button variant="outline" className="justify-start gap-2">
              <HomeIcon className="size-4" />
              Início
            </Button>

            <Button variant="outline" className="justify-start gap-2">
              <PercentIcon className="size-4" />
              Ofertas
            </Button>

            <SheetClose asChild>
              <Button asChild variant="outline" className="justify-start gap-2">
                <Link href="/catalog">
                  <ListOrderedIcon className="size-4" />
                  Catálogo
                </Link>
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="font-bold uppercase text-primary">Tech</span> Store
        </h1>
      </Link>

      <Button aria-label="Open shopping cart" size="icon" variant="outline">
        <ShoppingCartIcon className="size-4" />
      </Button>
    </Card>
  )
}
