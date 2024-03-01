import type { Metadata } from 'next'
import Link from 'next/link'

import { CheckCircleIcon, PackageSearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Compra concluída',
}

export default function SuccessPage() {
  return (
    <main role="main" id="checkout-success" className="min-h-full p-6">
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
