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
    <main role="main" id={category.name} className="p-5 lg:container lg:py-10">
      <div className="flex flex-col gap-8 lg:gap-10">
        <Badge variant="heading">
          <CategoryIcon slug={params.slug} strokeWidth={3} />
          {category.name}
        </Badge>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(156px,_1fr))] lg:gap-8">
          {category.products.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <ProductItem product={computeProductTotalPrice(product)} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
