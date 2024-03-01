import type { Metadata } from 'next'

import { ProductList } from '@/components/common/product-list'
import { SectionTitle } from '@/components/common/section-title'
import { db } from '@/lib/prisma'
import { computeProductTotalPrice } from '@/lib/utils'

import { ProductDetails } from './_components/product-details'
import { ProductGallery } from './_components/product-gallery'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const slug = params.slug

  const product = await db.product.findFirst({
    where: {
      slug,
    },
  })

  if (!product) {
    return {}
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await db.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  })

  if (!product) {
    return null
  }

  return (
    <main role="main" id={product.name} className="flex flex-col pb-8">
      <ProductGallery name={product.name} imageUrls={product.imageUrls} />

      <div className="mt-8 px-5">
        <ProductDetails product={computeProductTotalPrice(product)} />
      </div>

      <div className="mt-16 flex flex-col gap-5">
        <SectionTitle>Produtos recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </main>
  )
}
