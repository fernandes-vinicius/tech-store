import type { Metadata } from 'next'

import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pagamento concluído',
}

export default function SuccessPage() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center gap-1 p-6 text-center">
      <CheckCircleIcon className="mb-5 size-10 text-green-400" />

      <h1 className="text-lg font-bold">Pagamento concluído!</h1>
      <p className="text-sm opacity-75">
        Seu pagamento foi confirmado com sucesso. Obrigado por comprar conosco.
        Agradecemos pela sua confiança.
      </p>
    </main>
  )
}
