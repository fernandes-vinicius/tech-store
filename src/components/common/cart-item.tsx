'use client'

import Image from 'next/image'

import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { useCart, type CartProduct } from '@/providers/cart-provider'

interface CartProductProps {
  product: CartProduct
}

export function CartItem({ product }: CartProductProps) {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useCart()

  function handleDecreaseProductQuantity() {
    decreaseProductQuantity(product.id)
  }

  function handleIncreaseProductQuantity() {
    increaseProductQuantity(product.id)
  }

  function handleRemoveProductFromCart() {
    removeProductFromCart(product.id)
  }

  return (
    <div className="flex w-full items-center gap-2">
      <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <p className="text-xs">{product.name}</p>

        <div className="flex items-center gap-2">
          <strong className="text-sm">
            {formatCurrency(product.totalPrice)}
          </strong>
          {product.discountPercentage > 0 && (
            <span className="text-xs line-through opacity-75">
              {formatCurrency(Number(product.basePrice))}
            </span>
          )}
        </div>

        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              aria-label="Decrease quantity"
              variant="outline"
              size="icon"
              className="size-8"
              onClick={handleDecreaseProductQuantity}
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            <span className="text-sm leading-none">{product.quantity}</span>
            <Button
              type="button"
              aria-label="Increase quantity"
              variant="outline"
              size="icon"
              className="size-8"
              onClick={handleIncreaseProductQuantity}
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </div>

          <Button
            type="button"
            aria-label="Remove product from cart"
            size="icon"
            variant="outline"
            className="size-8"
            onClick={handleRemoveProductFromCart}
          >
            <TrashIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
