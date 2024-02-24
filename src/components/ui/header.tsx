import { MenuIcon, ShoppingCartIcon } from 'lucide-react'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button aria-label="Toggle Menu" size="icon" variant="outline">
        <MenuIcon className="size-4" />
      </Button>

      <h1 className="text-lg font-semibold">
        <span className="uppercase text-primary">Tech</span> Store
      </h1>

      <Button aria-label="Open shopping cart" size="icon" variant="outline">
        <ShoppingCartIcon className="size-4" />
      </Button>
    </Card>
  )
}
