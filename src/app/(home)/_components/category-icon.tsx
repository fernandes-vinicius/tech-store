import { CATEGORY_SLUGS } from '@/lib/constants'
import type { LucideProps } from 'lucide-react'
import {
  KeyboardIcon,
  MouseIcon,
  HeadphonesIcon,
  SquareIcon,
  MonitorIcon,
  SpeakerIcon,
} from 'lucide-react'

interface CategoryIconProps extends LucideProps {
  slug: string
}

export function CategoryIcon({ slug, size = 16, ...props }: CategoryIconProps) {
  switch (slug) {
    case CATEGORY_SLUGS.KEYBOARDS:
      return <KeyboardIcon size={size} {...props} />

    case CATEGORY_SLUGS.MOUSES:
      return <MouseIcon size={size} {...props} />

    case CATEGORY_SLUGS.HEADPHONES:
      return <HeadphonesIcon size={size} {...props} />

    case CATEGORY_SLUGS.MOUSEPADS:
      return <SquareIcon size={size} {...props} />

    case CATEGORY_SLUGS.MONITORS:
      return <MonitorIcon size={size} {...props} />

    case CATEGORY_SLUGS.SPEAKERS:
      return <SpeakerIcon size={size} {...props} />

    default:
      return null
  }
}
