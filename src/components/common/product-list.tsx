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
          <div>
            <ProductItem
              product={computeProductTotalPrice(product)}
              className="w-[156px] lg:w-[180px] lg:min-w-[180px]"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
