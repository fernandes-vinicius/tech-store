'use client'

import { ShoppingCartIcon } from 'lucide-react'

import { CartItem } from '@/components/common/cart-item'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/providers/cart-provider'
import { computeProductTotalPrice } from '@/lib/utils'

export function Cart() {
  const { products } = useCart()

  return (
    <div className="flex flex-col gap-8">
      <Badge
        variant="outline"
        className="w-fit gap-1 border-primary px-3 py-1.5 text-base font-bold uppercase"
      >
        <ShoppingCartIcon className="size-4 fill-foreground" />
        Catálogo
      </Badge>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={computeProductTotalPrice(product) as never}
          />
        ))}
      </div>
    </div>
  )
}
