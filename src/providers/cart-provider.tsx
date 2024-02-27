'use client'

import React, { useState } from 'react'
import { type Product } from '@prisma/client'

interface CartProduct extends Product {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cardBasePrice: number
  cartTotalPrice: number
  cartTotalDiscount: number
  addProductToCart(product: CartProduct): void
}

const CartContext = React.createContext<ICartContext>({
  products: [],
  cardBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscount: 0,
  addProductToCart() {},
})

export function CartProvider({ children }: Readonly<React.PropsWithChildren>) {
  const [products, setProducts] = useState<CartProduct[]>([])

  function addProductToCart(product: CartProduct) {
    setProducts((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cardBasePrice: 0,
        cartTotalPrice: 0,
        cartTotalDiscount: 0,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const cartContext = React.useContext(CartContext)

  if (!cartContext) {
    throw new Error('`useCart` must be used within a CartProvider')
  }

  return cartContext
}
