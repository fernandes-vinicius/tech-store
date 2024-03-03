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
    <main role="main" id={product.name} className="pb-8 lg:px-5 lg:py-10">
      <div className="flex flex-col lg:container">
        <div className="grid gap-8 lg:grid-cols-2 lg:px-5 2xl:grid-cols-5">
          <div className="lg:col-span-1 2xl:col-span-3">
            <ProductGallery name={product.name} imageUrls={product.imageUrls} />
          </div>
          <div className="px-5 lg:col-span-1 lg:px-0 2xl:col-span-2">
            <ProductDetails product={computeProductTotalPrice(product)} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 lg:mt-20">
          <SectionTitle>Produtos recomendados</SectionTitle>
          <ProductList products={product.category.products} />
        </div>
      </div>
    </main>
  )
}
