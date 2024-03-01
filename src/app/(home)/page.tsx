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
    <main role="main" id="home">
      <div className="mx-auto w-full max-w-[1920px]">
        <PromoBanner
          src="/deals-banner-desktop.png"
          alt="Até 55% de desconto só esse mês"
          className="hidden lg:block"
        />
      </div>

      <div className="flex flex-col gap-8 py-8 lg:container lg:gap-10">
        <PromoBanner
          src="/deals-banner-mobile.png"
          alt="Até 55% de desconto só esse mês"
          className="px-5 lg:hidden"
        />

        <div className="px-5 lg:mt-2">
          <Categories />
        </div>

        <div className="flex flex-col gap-5">
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <div className="grid gap-9 px-5 lg:grid-cols-2">
          <PromoBanner
            src="/mouses-banner.png"
            alt="Até 55% de desconto em Mouses"
          />
          <PromoBanner
            src="/headphones-banner.png"
            alt="Até 20% de desconto em Fones"
            className="hidden lg:block"
          />
        </div>

        <div className="flex flex-col gap-5">
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <PromoBanner
          src="/headphones-banner.png"
          alt="Até 20% de desconto em Fones"
          className="px-5 lg:hidden"
        />

        <div className="flex flex-col gap-5">
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
    </main>
  )
}
