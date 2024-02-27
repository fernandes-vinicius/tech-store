import { db } from '@/lib/prisma'

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

  return <main>ProductPage: {product.name}</main>
}
