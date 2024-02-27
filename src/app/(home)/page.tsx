import { ProductList } from '@/components/common/product-list'
import { SectionTitle } from '@/components/common/section-title'
import { CATEGORY_SLUGS } from '@/lib/constants'
import { db } from '@/lib/prisma'

import { Categories } from './_components/categories'
import { PromoBanner } from './_components/promo-banner'

export default async function Home() {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const keyboards = await db.product.findMany({
    where: {
      category: {
        slug: CATEGORY_SLUGS.KEYBOARDS,
      },
    },
  })

  const mouses = await db.product.findMany({
    where: {
      category: {
        slug: CATEGORY_SLUGS.MOUSES,
      },
    },
  })

  return (
    <main className="flex flex-col gap-8 pb-8">
      <PromoBanner
        src="/banner-55-off.png"
        alt="Até 55% de desconto só esse mês"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div className="flex flex-col gap-5">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-mouses.png"
        alt="Até 55% de desconto em Mouses"
      />

      <div className="flex flex-col gap-5">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner src="/banner-fones.png" alt="Até 20% de desconto em Fones" />

      <div className="flex flex-col gap-5">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </main>
  )
}
