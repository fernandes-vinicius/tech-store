'use client'

import { Separator } from '@/components/ui/separator'
import { formatCurrency } from '@/lib/utils'

interface SummaryProps {
  subtotal: number
  totalDiscount: number
  total: number
}

export function Summary(props: SummaryProps) {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <Separator />

      <div className="flex items-center justify-between text-xs lg:text-sm">
        <p>Subtotal</p>
        <p className="text-right">{formatCurrency(props.subtotal)}</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs lg:text-sm">
        <p>Entrega</p>
        <p className="text-right uppercase">Grátis</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs lg:text-sm">
        <p>Descontos</p>
        <p className="text-right">- {formatCurrency(props.totalDiscount)}</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-sm font-bold lg:text-base">
        <strong>Total</strong>
        <strong className="text-right">{formatCurrency(props.total)}</strong>
      </div>
    </div>
  )
}
