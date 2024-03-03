import { type Category } from '@prisma/client'

import { CategoryIcon } from '@/components/common/category-icon'
import { Badge } from '@/components/ui/badge'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Badge
      variant="outline"
      className="w-full justify-center gap-2 rounded-lg py-3 font-bold"
    >
      <CategoryIcon slug={category.slug} />
      {category.name}
    </Badge>
  )
}
