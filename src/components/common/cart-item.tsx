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
    <div className="flex w-full items-center gap-2 lg:gap-4">
      <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent lg:h-[91px] lg:w-[91px]">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <p className="text-xs lg:text-sm">{product.name}</p>

        <div className="flex items-center gap-2">
          <strong className="text-sm lg:text-base">
            {formatCurrency(product.totalPrice)}
          </strong>
          {product.discountPercentage > 0 && (
            <span className="text-xs line-through opacity-75 lg:text-sm">
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
              className="size-8 lg:size-9"
              onClick={handleDecreaseProductQuantity}
            >
              <ChevronLeftIcon className="size-4 lg:size-5" />
            </Button>
            <span className="text-sm lg:text-base">{product.quantity}</span>
            <Button
              type="button"
              aria-label="Increase quantity"
              variant="outline"
              size="icon"
              className="size-8 lg:size-9"
              onClick={handleIncreaseProductQuantity}
            >
              <ChevronRightIcon className="size-4 lg:size-5" />
            </Button>
          </div>

          <Button
            type="button"
            aria-label="Remove product from cart"
            size="icon"
            variant="outline"
            className="size-8 lg:size-9"
            onClick={handleRemoveProductFromCart}
          >
            <TrashIcon className="size-4 lg:size-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
