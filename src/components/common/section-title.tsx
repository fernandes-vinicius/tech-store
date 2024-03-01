import { cn } from '@/lib/utils'

interface SectionTitleProps extends React.ComponentProps<'p'> {}

export function SectionTitle({ className, ...props }: SectionTitleProps) {
  return (
    <h3
      className={cn('px-5 font-bold uppercase lg:text-lg', className)}
      {...props}
    />
  )
}
