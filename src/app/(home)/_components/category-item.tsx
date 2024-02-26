import { type Category } from '@prisma/client'

import { Badge } from '@/components/ui/badge'

import { CategoryIcon } from './category-icon'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      <CategoryIcon slug={category.slug} />
      <span className="font-bold">{category.name}</span>
    </Badge>
  )
}
