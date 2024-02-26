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
    case 'keyboards':
      return <KeyboardIcon size={size} {...props} />

    case 'mouses':
      return <MouseIcon size={size} {...props} />

    case 'headphones':
      return <HeadphonesIcon size={size} {...props} />

    case 'mousepads':
      return <SquareIcon size={size} {...props} />

    case 'monitors':
      return <MonitorIcon size={size} {...props} />

    case 'speakers':
      return <SpeakerIcon size={size} {...props} />

    default:
      return null
  }
}
