import Image from 'next/image'
import { ArrowDownIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { formatCurrency, type ProductWithTotal } from '@/lib/utils'

interface ProductItemProps {
  product: ProductWithTotal
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[70%]"
          style={{ objectFit: 'contain' }}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon className="size-3" strokeWidth={3} />
            {`${product.discountPercentage} %`}
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="truncate text-xs">{product.name}</p>

        {product.discountPercentage > 0 && (
          <div className="flex items-center gap-2 truncate">
            <p className="font-bold">{formatCurrency(product.totalPrice)}</p>
            <p className="truncate text-xs line-through opacity-75">
              {formatCurrency(Number(product.basePrice))}
            </p>
          </div>
        )}

        {product.discountPercentage === 0 && (
          <p className="font-bold">
            {formatCurrency(Number(product.basePrice))}
          </p>
        )}
      </div>
    </div>
  )
}
