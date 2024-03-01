import { getServerSession } from 'next-auth'

import { PackageSearchIcon } from 'lucide-react'

import { OrderItem } from '@/components/common/order-item'
import { Badge } from '@/components/ui/badge'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/prisma'

export default async function OrdersPage() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return <p>Access Denied</p>
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
    <main className="flex flex-col gap-8 p-5">
      <Badge variant="heading">
        <PackageSearchIcon className="size-4" />
        Meus Pedidos
      </Badge>

      <div className="flex flex-col gap-5">
        {orders.map((order, index) => (
          <OrderItem key={order.id} order={order} index={index + 1} />
        ))}
      </div>
    </main>
  )
}