import { type Product } from '@prisma/client'

import { ProductItem } from '@/components/common/product-item'

interface ProductListProps {
  products: Product[]
}

export async function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
