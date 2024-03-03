import type { Metadata } from 'next'
import Link from 'next/link'

import { PercentIcon } from 'lucide-react'

import { ProductItem } from '@/components/common/product-item'
import { Badge } from '@/components/ui/badge'
import { db } from '@/lib/prisma'
import { computeProductTotalPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Ofertas',
}

export default async function DealsPage() {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <main role="main" id="deals" className="p-5 lg:container lg:py-10">
      <div className="flex flex-col gap-8 lg:gap-10">
        <Badge variant="heading">
          <PercentIcon className="size-4 lg:size-5" />
          Ofertas
        </Badge>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(156px,_1fr))] lg:gap-8">
          {deals.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <ProductItem product={computeProductTotalPrice(product)} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
