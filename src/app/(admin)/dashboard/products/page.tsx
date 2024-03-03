import { ProductItem } from '@/components/common/product-item'
import { db } from '@/lib/prisma'
import { computeProductTotalPrice } from '@/lib/utils'

export default async function ProductsPage() {
  const products = await db.product.findMany()

  return (
    <main className="grid grid-cols-1 gap-8 lg:grid-cols-6">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </main>
  )
}
