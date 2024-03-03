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

export function computeProductTotalPrice({
  discountPercentage,
  basePrice,
}: Pick<Product, 'discountPercentage' | 'basePrice'>) {
  if (discountPercentage === 0) {
    return Number(basePrice)
  }

  const discountTotal = Number(basePrice) * (discountPercentage / 100)
  const totalPrice = Number(basePrice) - discountTotal

  return totalPrice
}
