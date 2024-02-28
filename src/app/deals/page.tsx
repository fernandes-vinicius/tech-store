import Link from 'next/link'

import { PercentIcon } from 'lucide-react'

import { ProductItem } from '@/components/common/product-item'
import { Badge } from '@/components/ui/badge'
import { db } from '@/lib/prisma'
import { computeProductTotalPrice } from '@/lib/utils'

export default async function DealsPage() {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <main className="flex flex-col gap-8 p-5">
      <Badge
        variant="outline"
        className="w-fit gap-1 border-primary px-3 py-1.5 text-base font-bold uppercase"
      >
        <PercentIcon className="size-4 fill-foreground" />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-4">
        {deals.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`}>
            <ProductItem product={computeProductTotalPrice(product)} />
          </Link>
        ))}
      </div>
    </main>
  )
}
