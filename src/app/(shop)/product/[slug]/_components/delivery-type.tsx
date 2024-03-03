import { TruckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

interface DeliveryTypeProps extends React.ComponentProps<'div'> {}

export function DeliveryType({ className, ...props }: DeliveryTypeProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-lg bg-[#2A2A2A] px-5 py-2',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <TruckIcon className="size-8" />

        <div className="flex flex-col">
          <p className="text-xs">
            Entrega via <strong className="italic">FSPacket®</strong>
          </p>
          <p className="text-xs text-[#8162FF]">
            Envio para <strong>todo Brasil</strong>
          </p>
        </div>
      </div>

      <strong className="text-xs capitalize">Frete grátis</strong>
    </div>
  )
}
