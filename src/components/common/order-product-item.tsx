import Image from 'next/image'

import { Prisma } from '@prisma/client'

import { SEO } from '@/lib/seo'
import { computeProductTotalPrice, formatCurrency } from '@/lib/utils'

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{ include: { product: true } }>
}

export function OrderProductItem({ orderProduct }: OrderProductItemProps) {
  const product = computeProductTotalPrice(orderProduct.product)

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={orderProduct.product.imageUrls[0]}
          alt={orderProduct.product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="w-fit rounded-md bg-accent px-3 py-1">
          <p className="text-[0.625rem]">
            Vendido e entregue por:{' '}
            <span className="font-semibold">{SEO.name}</span>
          </p>
        </div>

        <p className="text-xs">{product.name}</p>

        <div className="flex items-center gap-1">
          <strong className="text-sm">
            {formatCurrency(product.totalPrice)}
          </strong>

          {product.discountPercentage > 0 && (
            <span className="text-xs line-through opacity-60">
              {formatCurrency(Number(product.basePrice))}
            </span>
          )}

          <p className="ml-auto text-right text-[0.625rem] opacity-75">
            Qtd: {orderProduct.quantity}
          </p>
        </div>
      </div>
    </div>
  )
}
