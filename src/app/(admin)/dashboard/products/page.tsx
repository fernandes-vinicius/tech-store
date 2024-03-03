import { PackageIcon, PlusIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/prisma'

export default async function ProductsPage() {
  const products = await db.product.findMany()

  return (
    <main className="flex flex-col gap-10 p-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
        <Badge variant="heading">
          <PackageIcon className="size-5" />
          Produtos
        </Badge>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Produtos: {products.length}</h2>

        <Button>
          <PlusIcon className="size-5" />
          Adicionar Produto
        </Button>
      </div>
    </main>
  )
}
