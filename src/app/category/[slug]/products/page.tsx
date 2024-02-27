import { Badge } from '@/components/ui/badge'
import { CategoryIcon } from '@/components/common/category-icon'
import { ProductItem } from '@/components/common/product-item'
import { computeProductTotalPrice } from '@/lib/utils'
import { db } from '@/lib/prisma'

interface ProductsPageProps {
  params: {
    slug: string
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

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </main>
  )
}
