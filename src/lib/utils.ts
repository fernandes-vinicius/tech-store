import { type Product } from '@prisma/client'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return formatter.format(value)
}

export interface ProductWithTotal extends Product {
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
