'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { useEffect } from 'react'

import { CheckCircleIcon, PackageSearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useCart } from '@/providers/cart-provider'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const { products, resetCart } = useCart()

  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (!sessionId) {
      router.push('/')
    }
  }, [router, sessionId])

  // Check if there are products in the cart and reset it after checkout success.
  useEffect(() => {
    if (sessionId && products.length > 0) {
      resetCart()
    }
  }, [products.length, resetCart, sessionId])

  if (!sessionId) {
    return null
  }

  return (
    <main role="main" id="checkout-success" className="min-h-full p-8">
      <div className="flex flex-col items-center gap-8 text-center">
        <CheckCircleIcon className="size-10 text-green-400" />

        <div className="space-y-1">
          <h1 className="text-lg font-bold">Compra concluída!</h1>
          <p className="text-sm opacity-75 lg:max-w-lg">
            Sua compra foi confirmada com sucesso. Obrigado por comprar conosco.
            Agradecemos pela sua confiança.
          </p>
        </div>

        <Button asChild size="lg">
          <Link href="/orders">
            <PackageSearchIcon className="size-4" />
            Acompanhe seus pedidos
          </Link>
        </Button>
      </div>
    </main>
  )
}
