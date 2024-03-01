import Image from 'next/image'

import { DiscountBadge } from '@/components/common/discount-badge'
import { cn, formatCurrency, type ProductWithTotal } from '@/lib/utils'

interface ProductItemProps {
  product: ProductWithTotal
  className?: string
}

export function ProductItem({ product, className }: ProductItemProps) {
  return (
    <div className={cn('flex min-w-[156px] flex-col gap-4', className)}>
      <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
          priority
          quality={100}
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />

        {product.discountPercentage > 0 && (
          <DiscountBadge className="absolute left-3 top-3">
            {product.discountPercentage}
          </DiscountBadge>
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
