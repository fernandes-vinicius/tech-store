import Link from 'next/link'

import { db } from '@/lib/prisma'

import { CategoryItem } from './category-item'

export async function Categories() {
  const categories = await db.category.findMany()

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.slug}/products`}>
          <CategoryItem category={category} />
        </Link>
      ))}
    </div>
  )
}
