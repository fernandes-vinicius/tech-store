'use client'

import React, { useState } from 'react'

import { type ProductWithTotal } from '@/lib/utils'

export interface CartProduct extends ProductWithTotal {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cardBasePrice: number
  cartTotalPrice: number
  cartTotalDiscount: number
  addProductToCart(product: CartProduct): void
  decreaseProductQuantity(productId: string): void
  increaseProductQuantity(productId: string): void
  removeProductFromCart(productId: string): void
}

const CartContext = React.createContext<ICartContext>({
  products: [],
  cardBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscount: 0,
  addProductToCart() {},
  decreaseProductQuantity() {},
  increaseProductQuantity() {},
  removeProductFromCart() {},
})

export function CartProvider({ children }: Readonly<React.PropsWithChildren>) {
  const [products, setProducts] = useState<CartProduct[]>([])

  function addProductToCart(product: CartProduct) {
    const productAlreadyInCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (productAlreadyInCart) {
      const newProducts = products.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity,
          }
        }
        return cartProduct
      })

      setProducts(newProducts)
    } else {
      setProducts((prev) => [...prev, product])
    }
  }

  function decreaseProductQuantity(productId: string) {
    let newProducts = products.map((cartProduct) => {
      if (cartProduct.id === productId) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity - 1,
        }
      }
      return cartProduct
    })

    // Remove product from cart if quantity is 0
    newProducts = newProducts.filter((cartProduct) => cartProduct.quantity > 0)

    setProducts(newProducts)
  }

  function increaseProductQuantity(productId: string) {
    const newProducts = products.map((cartProduct) => {
      if (cartProduct.id === productId) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity + 1,
        }
      }
      return cartProduct
    })

    setProducts(newProducts)
  }

  function removeProductFromCart(productId: string) {
    setProducts((prev) => prev.filter((product) => product.id !== productId))
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cardBasePrice: 0,
        cartTotalPrice: 0,
        cartTotalDiscount: 0,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
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
