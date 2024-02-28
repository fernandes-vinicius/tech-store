'use server'

import { type OrderProduct } from '@prisma/client'

import { db } from '@/lib/prisma'
import { type CartProduct } from '@/providers/cart-provider'

export async function createOrder(cartProducts: CartProduct[], userId: string) {
  const orderProducts = cartProducts.map((cartProduct) => ({
    productId: cartProduct.id,
    basePrice: cartProduct.basePrice,
    discountPercentage: cartProduct.discountPercentage,
    quantity: cartProduct.quantity,
  })) as OrderProduct[]

  const order = await db.order.create({
    data: {
      userId,
      status: 'WAITING_FOR_PAYMENT',
      orderProducts: {
        createMany: {
          data: orderProducts,
          skipDuplicates: true,
        },
      },
    },
  })

  return order
}
