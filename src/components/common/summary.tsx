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
    <div className="flex flex-col gap-3">
      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Subtotal</p>
        <p className="text-right">{formatCurrency(props.subtotal)}</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Entrega</p>
        <p className="text-right uppercase">Grátis</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Descontos</p>
        <p className="text-right">- {formatCurrency(props.totalDiscount)}</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-sm font-bold">
        <strong>Total</strong>
        <strong className="text-right">{formatCurrency(props.total)}</strong>
      </div>
    </div>
  )
}
