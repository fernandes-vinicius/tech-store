'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DiscountBadge } from '@/components/common/discount-badge'
import { type ProductWithTotal, formatCurrency } from '@/lib/utils'
import { useCart } from '@/providers/cart-provider'

import { DeliveryType } from './delivery-type'

interface ProductDetailsProps {
  product: ProductWithTotal
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addProductToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleIncreaseQuantity() {
    setQuantity((prev) => prev + 1)
  }

  function handleAddProductToCart() {
    addProductToCart({ ...product, quantity })
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">
          {formatCurrency(product.totalPrice)}
        </h1>

        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          {formatCurrency(Number(product.basePrice))}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          type="button"
          aria-label="Decrease quantity"
          variant="outline"
          size="icon"
          onClick={handleDecreaseQuantity}
        >
          <ChevronLeftIcon className="size-4" />
        </Button>
        <span className="text-sm leading-none">{quantity}</span>
        <Button
          type="button"
          aria-label="Increase quantity"
          variant="outline"
          size="icon"
          onClick={handleIncreaseQuantity}
        >
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <h3 className="text-sm font-bold">Descrição</h3>
        <p className="text-justify text-xs leading-relaxed opacity-60">
          {product.description}
        </p>
      </div>

      <Button
        type="button"
        aria-label="Add product to cart"
        className="mt-8 font-bold uppercase"
        onClick={handleAddProductToCart}
      >
        Adicionar ao carrinho
      </Button>

      <DeliveryType className="mt-5" />
    </div>
  )
}
