import Image from 'next/image'
import { type Product } from '@prisma/client'

interface ProductItemProps {
  product: Product
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[70%]"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="space-y-px">
        <p className="truncate text-sm">{product.name}</p>
      </div>
    </div>
  )
}
