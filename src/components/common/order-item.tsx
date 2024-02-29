'use client'

import { useMemo } from 'react'

import { Prisma } from '@prisma/client'

import { OrderProductItem } from '@/components/common/order-product-item'
import { Summary } from '@/components/common/summary'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MAP_ORDER_STATUS } from '@/lib/constants'
import { computeProductTotalPrice, formatDate } from '@/lib/utils'

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: { orderProducts: { include: { product: true } } }
  }>
  index: number
}

export function OrderItem({ order, index }: OrderItemProps) {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      )
    }, 0)
  }, [order.orderProducts])

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      const productTotalPrice = computeProductTotalPrice(orderProduct.product)
      return acc + productTotalPrice.totalPrice * orderProduct.quantity
    }, 0)
  }, [order.orderProducts])

  const totalDiscount = subtotal - total

  const orderCode = String(index).padStart(3, '0')

  return (
    <Card>
      <CardContent className="p-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={`order-${order.id}`} className="border-b-0">
            <AccordionTrigger className="py-0 hover:no-underline">
              <div className="flex flex-col gap-1 text-left">
                <h3 className="text-sm font-bold uppercase">
                  Número do pedido
                </h3>
                <span className="text-xs opacity-75">#{orderCode}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="!p-0">
              <div className="flex flex-col gap-5 pt-5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex flex-col font-bold">
                    <strong className="uppercase">Status</strong>
                    <p className="text-[#8162FF]">
                      {MAP_ORDER_STATUS[order.status]}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <strong className="uppercase">Data</strong>
                    <p className="opacity-75">{formatDate(order.createdAt)}</p>
                  </div>

                  <div className="flex flex-col">
                    <strong className="uppercase">Pagamento</strong>
                    <p className="opacity-75">Cartão</p>
                  </div>
                </div>

                <Separator />

                {order.orderProducts.map((orderProduct) => (
                  <OrderProductItem
                    key={orderProduct.id}
                    orderProduct={orderProduct}
                  />
                ))}

                <Summary
                  subtotal={subtotal}
                  totalDiscount={totalDiscount}
                  total={total}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
