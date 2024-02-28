import type { Metadata } from 'next'
import Link from 'next/link'

import { CategoryIcon } from '@/components/common/category-icon'
import { ProductItem } from '@/components/common/product-item'
import { Badge } from '@/components/ui/badge'
import { db } from '@/lib/prisma'
import { computeProductTotalPrice } from '@/lib/utils'

interface ProductsPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const slug = params.slug

  const category = await db.category.findFirst({
    where: {
      slug,
    },
  })

  if (!category) {
    return {}
  }

  return {
    title: category.name,
  }
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const category = await db.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  })

  if (!category) {
    return null
  }

  return (
    <main className="flex flex-col gap-8 p-5">
      <Badge
        variant="outline"
        className="w-fit gap-1 border-primary px-3 py-1.5 text-base font-bold uppercase"
      >
        <CategoryIcon slug={params.slug} strokeWidth={3} />
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-4">
        {category.products.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`}>
            <ProductItem product={computeProductTotalPrice(product)} />
          </Link>
        ))}
      </div>
    </main>
  )
}
