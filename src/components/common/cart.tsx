'use client'

import { useSession } from 'next-auth/react'

import { loadStripe } from '@stripe/stripe-js'
import { ShoppingCartIcon } from 'lucide-react'
import { toast } from 'sonner'

import { createCheckout } from '@/actions/checkout'
import { createOrder } from '@/actions/order'
import { CartItem } from '@/components/common/cart-item'
import { Summary } from '@/components/common/summary'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { env } from '@/lib/env'
import { computeProductTotalPrice } from '@/lib/utils'
import { useCart } from '@/providers/cart-provider'

export function Cart() {
  const { products, subtotal, totalDiscount, total } = useCart()

  const { data: session } = useSession()

  async function handleCheckout() {
    if (!session?.user) {
      return toast.error('Faça login para realizar o checkout')
    }

    try {
      const order = await createOrder(products, session.user.id)

      const checkout = await createCheckout(products, order.id)

      const stripe = await loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

      stripe?.redirectToCheckout({ sessionId: checkout.id })
    } catch (error) {
      console.log('CHECKOUT ERROR', error)
      toast.error('Ocorreu um erro ao realizar o checkout')
    }
  }

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

      {products.length > 0 && (
        <Summary
          subtotal={subtotal}
          totalDiscount={totalDiscount}
          total={total}
        />
      )}

      {products.length > 0 && (
        <Button
          type="button"
          disabled={products.length === 0}
          onClick={handleCheckout}
          className="font-bold uppercase"
        >
          Finalizar compra
        </Button>
      )}
    </div>
  )
}
