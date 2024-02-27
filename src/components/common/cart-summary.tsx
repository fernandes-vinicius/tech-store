'use client'

import { Separator } from '@/components/ui/separator'
import { formatCurrency } from '@/lib/utils'
import { useCart } from '@/providers/cart-provider'

export function CartSummary() {
  const { subtotal, totalDiscount, total } = useCart()

  return (
    <div className="flex flex-col gap-3">
      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Subtotal</p>
        <p className="text-right">{formatCurrency(subtotal)}</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Entrega</p>
        <p className="text-right uppercase">Grátis</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Descontos</p>
        <p className="text-right">- {formatCurrency(totalDiscount)}</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-sm font-bold">
        <strong>Total</strong>
        <strong className="text-right">{formatCurrency(total)}</strong>
      </div>
    </div>
  )
}
