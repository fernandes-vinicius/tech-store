import Image from 'next/image'

import { Categories } from './_components/categories'

export default function Home() {
  return (
    <main className="space-y-8 p-5">
      <Image
        src="/banner-55-off.png"
        alt="Até 55% de desconto só esse mês"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
        // fill
      />

      <Categories />
    </main>
  )
}
