import { OrderStatus } from '@prisma/client'

export const CATEGORY_SLUGS: Record<string, string> = {
  KEYBOARDS: 'keyboards',
  HEADPHONES: 'headphones',
  MOUSES: 'mouses',
  MONITORS: 'monitors',
  SPEAKERS: 'speakers',
  MOUSEPADS: 'mousepads',
}

export const MAP_ORDER_STATUS: Record<OrderStatus, string> = {
  [OrderStatus.PAYMENT_CONFIRMED]: 'Pago',
  [OrderStatus.WAITING_FOR_PAYMENT]: 'Pendente',
}
