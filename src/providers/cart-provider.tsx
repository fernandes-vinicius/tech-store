'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { type Product } from '@prisma/client'

const STORAGE_KEY = '@tech-store/cart-products'

export interface CartProduct extends Product {
  quantity: number
  totalPrice: number
}

interface ICartContext {
  products: CartProduct[]
  total: number
  subtotal: number
  totalDiscount: number
  addProductToCart(product: CartProduct): void
  decreaseProductQuantity(productId: string): void
  increaseProductQuantity(productId: string): void
  removeProductFromCart(productId: string): void
  resetCart(): void
}

const CartContext = createContext<ICartContext>({
  products: [],
  total: 0,
  subtotal: 0,
  totalDiscount: 0,
  addProductToCart() {},
  decreaseProductQuantity() {},
  increaseProductQuantity() {},
  removeProductFromCart() {},
  resetCart() {},
})

export function CartProvider({ children }: Readonly<React.PropsWithChildren>) {
  const [products, setProducts] = useState<CartProduct[]>(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    }
    return []
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    }
  }, [products])

  // Total without discount
  const subtotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity
    }, 0)
  }, [products])

  // Total with discount
  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.totalPrice * product.quantity
    }, 0)
  }, [products])

  const totalDiscount = subtotal - total

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

  function resetCart() {
    setProducts([])
  }

  return (
    <CartContext.Provider
      value={{
        products,
        total,
        subtotal,
        totalDiscount,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error('`useCart` must be used within a CartProvider')
  }

  return cartContext
}
