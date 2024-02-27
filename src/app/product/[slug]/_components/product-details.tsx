'use client'

import { useState } from 'react'
import { ArrowDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { formatCurrency, type ProductWithTotal } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { DeliveryType } from './delivery-type'

interface ProductDetailsProps {
  product: Pick<
    ProductWithTotal,
    'name' | 'basePrice' | 'description' | 'discountPercentage' | 'totalPrice'
  >
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleIncreaseQuantity() {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">
          {formatCurrency(product.totalPrice)}
        </h1>

        {product.discountPercentage > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon className="size-3" strokeWidth={3} />
            {`${product.discountPercentage} %`}
          </Badge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          {formatCurrency(Number(product.basePrice))}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={handleDecreaseQuantity}>
          <ChevronLeftIcon className="size-4" />
        </Button>
        <span className="text-sm leading-none">{quantity}</span>
        <Button variant="outline" size="icon" onClick={handleIncreaseQuantity}>
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <h3 className="text-sm font-bold">Descrição</h3>
        <p className="text-justify text-xs leading-relaxed opacity-60">
          {product.description}
        </p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <DeliveryType className="mt-5" />
    </div>
  )
}
