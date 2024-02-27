import { cn } from '@/lib/utils'

interface SectionTitleProps extends React.ComponentProps<'p'> {}

export function SectionTitle({ className, ...props }: SectionTitleProps) {
  return <p className={cn('px-5 font-bold uppercase', className)} {...props} />
}
