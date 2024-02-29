import { Prisma } from '@prisma/client'

import { OrderProductItem } from '@/components/common/order-product-item'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { formatDate } from '@/lib/utils'

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: { orderProducts: { include: { product: true } } }
  }>
}

export function OrderItem({ order }: OrderItemProps) {
  return (
    <Card>
      <CardContent className="px-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={`order-${order.id}`} className="border-b-0">
            <AccordionTrigger>
              <div className="flex flex-col gap-1 text-left">
                Pedido com {order.orderProducts.length} produto(s)
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex flex-col font-bold">
                    <strong className="uppercase">Status</strong>
                    <p className="text-[#8162FF]">
                      {/* {order.status} */}
                      Pago
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
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
