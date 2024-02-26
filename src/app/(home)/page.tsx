import Image from 'next/image'

import { prisma } from '@/lib/prisma'

import { Categories } from './_components/categories'
import { ProductList } from './_components/product-list'

export default async function Home() {
  const deals = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <main className="space-y-8">
      <Image
        src="/banner-55-off.png"
        alt="Até 55% de desconto só esse mês"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        // fill
      />

      <div className="px-5">
        <Categories />
      </div>

      <div className="flex flex-col gap-5">
        <p className="px-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-mouses.png"
        alt="Até 55% de desconto em Mouses"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        // fill
      />
    </main>
  )
}
