'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'

import { Cart } from '@/components/common/cart'
import { CartCounterBadge } from '@/components/common/cart-counter-badge'
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
import { AuthProviders } from '@/lib/auth-providers'
import { useCart } from '@/providers/cart-provider'

export function Header() {
  const { data: session, status } = useSession()

  const { products } = useCart()

  const cartTotalItems = products.length ?? 0

  async function handleLogin() {
    await signIn(AuthProviders.GOOGLE)
  }

  async function handleLogout() {
    await signOut()
  }

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            type="button"
            aria-label="Toggle Menu"
            size="icon"
            variant="outline"
          >
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
                  <p className="text-xs opacity-75">Boas compras!</p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === 'unauthenticated' && (
              <Button
                type="button"
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
                type="button"
                variant="outline"
                className="justify-start gap-2"
                onClick={handleLogout}
              >
                <LogInIcon className="size-4" />
                Sair
              </Button>
            )}

            <SheetClose asChild>
              <Button asChild variant="outline" className="justify-start gap-2">
                <Link href="/">
                  <HomeIcon className="size-4" />
                  Início
                </Link>
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button asChild variant="outline" className="justify-start gap-2">
                <Link href="/orders">
                  <PackageSearchIcon className="size-4" />
                  Meus Pedidos
                </Link>
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button asChild variant="outline" className="justify-start gap-2">
                <Link href="/deals">
                  <PercentIcon className="size-4" />
                  Ofertas
                </Link>
              </Button>
            </SheetClose>

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

      <Sheet>
        <SheetTrigger asChild>
          <Button
            type="button"
            aria-label="Open shopping cart"
            size="icon"
            variant="outline"
            className="relative"
          >
            <CartCounterBadge quantity={cartTotalItems} />
            <ShoppingCartIcon className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  )
}
