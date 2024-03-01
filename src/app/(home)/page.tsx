import Link from 'next/link'

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
        <Link href="/deals" className="hidden lg:block">
          <PromoBanner
            src="/deals-banner-desktop.png"
            alt="Até 55% de desconto só esse mês"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-8 py-8 lg:container lg:gap-10">
        <Link href="/deals" className="px-5 lg:hidden">
          <PromoBanner
            src="/deals-banner-mobile.png"
            alt="Até 55% de desconto só esse mês"
          />
        </Link>

        <div className="px-5 lg:mt-2">
          <Categories />
        </div>

        <div className="flex flex-col gap-5">
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <div className="grid gap-9 px-5 lg:grid-cols-2">
          <Link href={`/category/${CATEGORY_SLUGS.MOUSES}/products`}>
            <PromoBanner
              src="/mouses-banner.png"
              alt="Até 55% de desconto em Mouses"
            />
          </Link>
          <Link
            href={`/category/${CATEGORY_SLUGS.HEADPHONES}/products`}
            className="hidden lg:block"
          >
            <PromoBanner
              src="/headphones-banner.png"
              alt="Até 20% de desconto em Fones"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <Link
          href={`/category/${CATEGORY_SLUGS.HEADPHONES}/products`}
          className="px-5 lg:hidden"
        >
          <PromoBanner
            src="/headphones-banner.png"
            alt="Até 20% de desconto em Fones"
          />
        </Link>

        <PromoBanner
          src="/free-shipping-banner.png"
          alt="Frete GRÁTIS para todo o Brasil"
          className="hidden px-5 lg:block"
        />

        <div className="flex flex-col gap-5">
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
    </main>
  )
}
