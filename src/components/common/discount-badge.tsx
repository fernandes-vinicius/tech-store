import { ArrowDownIcon } from 'lucide-react'

import { Badge, BadgeProps } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface DiscountBadgeProps extends BadgeProps {}

export function DiscountBadge(props: DiscountBadgeProps) {
  const { className, children, ...rest } = props

  return (
    <Badge className={cn('px-2 py-[2px]', className)} {...rest}>
      <ArrowDownIcon className="size-3" strokeWidth={3} />
      {children} %
    </Badge>
  )
}
