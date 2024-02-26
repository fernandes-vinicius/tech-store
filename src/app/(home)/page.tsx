import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-5">
      <Image
        src="/banner-55-off.png"
        alt="Até 55% de desconto só esse mês"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
        // fill
      />
    </main>
  )
}
