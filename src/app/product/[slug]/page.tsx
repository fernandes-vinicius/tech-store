import { db } from '@/lib/prisma'

import { ProductGallery } from './_components/product-gallery'

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
    <main>
      <ProductGallery name={product.name} imageUrls={product.imageUrls} />
    </main>
  )
}
