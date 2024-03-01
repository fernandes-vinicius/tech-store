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
    <div className="relative flex items-center gap-4">
      <div className="flex aspect-square h-[77px] items-center justify-center rounded-lg bg-accent lg:h-[91px]">
        <Image
          src={orderProduct.product.imageUrls[0]}
          alt={orderProduct.product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 lg:gap-2">
        <div className="w-fit rounded-md bg-accent px-3 py-1">
          <p className="text-[0.625rem] lg:text-xs">
            Vendido e entregue por:{' '}
            <span className="font-semibold">{SEO.name}</span>
          </p>
        </div>

        <p className="text-xs lg:text-sm">{product.name}</p>

        <p className="hidden text-[0.625rem] text-xs opacity-75 lg:block">
          Quantidade: {orderProduct.quantity}
        </p>

        <div className="flex items-center gap-1 lg:absolute lg:bottom-0 lg:right-0 lg:h-full lg:flex-col lg:items-end lg:justify-center">
          <strong className="text-sm lg:text-right lg:text-xl">
            {formatCurrency(product.totalPrice)}
          </strong>

          {product.discountPercentage > 0 && (
            <p className="flex items-center gap-1 text-xs opacity-60 lg:text-right">
              <span className="hidden lg:block">De:</span>
              <span className="line-through">
                {formatCurrency(Number(product.basePrice))}
              </span>
            </p>
          )}

          <p className="ml-auto text-right text-[0.625rem] opacity-75 lg:hidden">
            Qtd: {orderProduct.quantity}
          </p>
        </div>
      </div>
    </div>
  )
}
