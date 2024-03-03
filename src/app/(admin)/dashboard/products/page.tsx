import { PackageIcon, PlusIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/prisma'
import { computeProductTotalPrice } from '@/lib/utils'

import { ProductsTable } from './_components/products-table'

export default async function ProductsPage() {
  const products = await db.product.findMany({
    include: {
      category: true,
    },
  })

  const productsWithTotalPrice = products.map(computeProductTotalPrice)

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

      <ProductsTable products={productsWithTotalPrice} />
    </main>
  )
}
