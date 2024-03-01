'use client'

import { useEffect, useState } from 'react'

import { Badge } from '@/components/ui/badge'

interface CartCounterBadgeProps {
  quantity: number
}

export function CartCounterBadge({ quantity = 0 }: CartCounterBadgeProps) {
  const [qtdItems, setQtdItems] = useState(0)

  useEffect(() => {
    setQtdItems(quantity)
  }, [quantity])

  if (qtdItems === 0) {
    return null
  }

  return (
    <Badge className="absolute right-[calc(-1.25rem/2)] top-[calc(-1.25rem/2)]">
      {qtdItems}
    </Badge>
  )
}
