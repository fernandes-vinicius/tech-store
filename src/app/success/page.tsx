import type { Metadata } from 'next'
import Link from 'next/link'

import { CheckCircleIcon, PackageSearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Pagamento concluído',
}

export default function SuccessPage() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center gap-8 p-6 text-center">
      <CheckCircleIcon className="size-10 text-green-400" />

      <div className="space-y-1">
        <h1 className="text-lg font-bold">Pagamento concluído!</h1>
        <p className="text-sm opacity-75">
          Seu pagamento foi confirmado com sucesso. Obrigado por comprar
          conosco. Agradecemos pela sua confiança.
        </p>
      </div>

      <Button asChild size="lg">
        <Link href="/orders">
          <PackageSearchIcon className="size-4" />
          Acompanhe seus pedidos
        </Link>
      </Button>
    </main>
  )
}
