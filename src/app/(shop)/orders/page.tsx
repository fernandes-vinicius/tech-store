import { getServerSession } from 'next-auth'

import { PackageSearchIcon } from 'lucide-react'

import { AccessDenied } from '@/components/common/access-denied'
import { OrderItem } from '@/components/common/order-item'
import { Badge } from '@/components/ui/badge'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/prisma'

export default async function OrdersPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return <AccessDenied />
  }

  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  })

  return (
    <main role="main" id="orders" className="p-5 lg:container lg:py-10">
      <div className="flex flex-col gap-8 lg:gap-10">
        <Badge variant="heading">
          <PackageSearchIcon className="size-4 lg:size-5" />
          Meus Pedidos
        </Badge>

        <div className="flex flex-col gap-5 lg:gap-8">
          {orders.map((order, index) => (
            <OrderItem key={order.id} order={order} index={index + 1} />
          ))}
        </div>
      </div>
    </main>
  )
}
