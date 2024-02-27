'use client'

import { ShoppingCartIcon } from 'lucide-react'

import { CartItem } from '@/components/common/cart-item'
import { CartSummary } from '@/components/common/cart-summary'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useCart } from '@/providers/cart-provider'
import { computeProductTotalPrice } from '@/lib/utils'

export function Cart() {
  const { products } = useCart()

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        variant="outline"
        className="w-fit gap-1 border-primary px-3 py-1.5 text-base font-bold uppercase"
      >
        <ShoppingCartIcon className="size-4 fill-foreground" />
        Carrinho
      </Badge>

      <div className="h-full max-h-full overflow-hidden">
        {products.length === 0 && (
          <p className="text-center font-semibold">
            Carrinho vazio. Vamos fazer compras?
          </p>
        )}

        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-5">
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={computeProductTotalPrice(product) as never}
              />
            ))}
          </div>
        </ScrollArea>
      </div>

      <CartSummary />

      <Button type="button" className="font-bold uppercase">
        Finalizar compra
      </Button>
    </div>
  )
}
