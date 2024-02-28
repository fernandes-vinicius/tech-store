import Link from 'next/link'

import { type Product } from '@prisma/client'

import { ProductItem } from '@/components/common/product-item'
import { computeProductTotalPrice } from '@/lib/utils'

interface ProductListProps {
  products: Product[]
}

export async function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.slug}`}>
          <div className="w-[170px] max-w-[170px]">
            <ProductItem product={computeProductTotalPrice(product)} />
          </div>
        </Link>
      ))}
    </div>
  )
}
