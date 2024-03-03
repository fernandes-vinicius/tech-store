'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  LayoutDashboardIcon,
  ListOrderedIcon,
  PackageIcon,
  PackageSearchIcon,
} from 'lucide-react'

import { TechStoreLogo } from '@/components/common/tech-store-logo'
import { Button } from '@/components/ui/button'

export function Sidebar() {
  const pathname = usePathname()

  const isActivePath = (path: string) => pathname.endsWith(path)

  return (
    <aside className="sticky left-0 top-0 flex w-full max-w-[300px] flex-col items-center gap-10 border-r bg-background p-8">
      <TechStoreLogo />

      <div className="flex w-full flex-col gap-3">
        <Button
          asChild
          variant={isActivePath('/dashboard') ? 'default' : 'outline'}
          className="w-full justify-start gap-2"
        >
          <Link href="/dashboard">
            <LayoutDashboardIcon className="size-4" />
            Dashboard
          </Link>
        </Button>

        <Button
          asChild
          variant={isActivePath('/products') ? 'default' : 'outline'}
          className="w-full justify-start gap-2"
        >
          <Link href="/dashboard/products">
            <PackageIcon className="size-4" />
            Produtos
          </Link>
        </Button>

        <Button
          asChild
          variant={isActivePath('/categories') ? 'default' : 'outline'}
          className="w-full justify-start gap-2"
        >
          <Link href="/dashboard/categories">
            <ListOrderedIcon className="size-4" />
            Categorias
          </Link>
        </Button>

        <Button
          asChild
          variant={isActivePath('/orders') ? 'default' : 'outline'}
          className="w-full justify-start gap-2"
        >
          <Link href="/dashboard/orders">
            <PackageSearchIcon className="size-4" />
            Pedidos
          </Link>
        </Button>
      </div>
    </aside>
  )
}
