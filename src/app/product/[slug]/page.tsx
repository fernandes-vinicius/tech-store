import { db } from '@/lib/prisma'
import { computeProductTotalPrice } from '@/lib/utils'

import { ProductGallery } from './_components/product-gallery'
import { ProductDetails } from './_components/product-details'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await db.product.findFirst({
    where: {
      slug: params.slug,
    },
  })

  if (!product) {
    return null
  }

  return (
    <main className="flex flex-col gap-8">
      <ProductGallery name={product.name} imageUrls={product.imageUrls} />

      <div className="px-5">
        <ProductDetails product={computeProductTotalPrice(product)} />
      </div>
    </main>
  )
}
