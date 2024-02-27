'use client'

import { ShoppingCartIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { useCart } from '@/providers/cart-provider'

export function Cart() {
  const { products } = useCart()

  return (
    <div className="">
      <Badge
        variant="outline"
        className="w-fit gap-1 border-primary px-3 py-1.5 text-base font-bold uppercase"
      >
        <ShoppingCartIcon className="size-4 fill-foreground" />
        Catálogo
      </Badge>

      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  )
}
