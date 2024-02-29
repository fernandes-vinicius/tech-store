import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { PackageSearchIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/prisma'

import { OrderItem } from './_components/order-item'

export default async function OrdersPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect('/')
  }

  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: true,
    },
  })

  return (
    <main className="flex flex-col gap-8 p-5">
      <Badge
        variant="outline"
        className="w-fit gap-1 border-primary px-3 py-1.5 text-base font-bold uppercase"
      >
        <PackageSearchIcon className="size-4" />
        Meus Pedidos
      </Badge>

      <div className="flex flex-col gap-5">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </main>
  )
}
