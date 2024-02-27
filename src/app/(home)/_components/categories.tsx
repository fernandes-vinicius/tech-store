import { db } from '@/lib/prisma'

import { CategoryItem } from './category-item'

export async function Categories() {
  const categories = await db.category.findMany()

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
