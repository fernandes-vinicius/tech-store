import { cn } from '@/lib/utils'
import Image, { type ImageProps } from 'next/image'

interface PromoBanner extends ImageProps {}

export function PromoBanner({ className, src, alt, ...props }: PromoBanner) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      className={cn('h-auto w-full px-5', className)}
      sizes="100vw"
      // fill
      {...props}
    />
  )
}
