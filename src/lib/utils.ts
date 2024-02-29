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

export function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  })
  return formatter.format(date)
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
  const discountTotal = Number(product.basePrice) * discountPercentage
  const discountPrice = Number(product.basePrice) - discountTotal

  return {
    ...product,
    totalPrice: discountPrice,
  }
}
