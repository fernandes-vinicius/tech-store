'use server'

import Stripe from 'stripe'

import { env } from '@/lib/env'
import { stripe } from '@/lib/stripe'
import { type CartProduct } from '@/providers/cart-provider'

export async function createCheckout(products: CartProduct[], orderId: string) {
  const successUrl = `${env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${env.NEXT_PUBLIC_APP_URL}/`

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
    products.map((product) => {
      return {
        price_data: {
          currency: 'BRL',
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.quantity,
      }
    })

  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      orderId,
    },
    line_items: lineItems,
    expand: ['line_items'],
  })

  return checkoutSession
}
