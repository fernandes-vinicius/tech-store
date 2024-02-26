import { type Product } from '@prisma/client'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ProductWithTotal extends Product {
  totalPrice: number
}

export function computeProductTotalPrice(product: Product): ProductWithTotal {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    }
  }

  const discountPercentage = product.discountPercentage / 100
  const discountPrice = Number(product.basePrice) * discountPercentage

  return {
    ...product,
    totalPrice: discountPrice,
  }
}
