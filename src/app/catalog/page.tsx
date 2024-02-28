import Link from 'next/link'

import { LayoutGridIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { db } from '@/lib/prisma'

import { CategoryItem } from './_components/category-item'

export default async function CatalogPage() {
  const categories = await db.category.findMany()

  return (
    <main className="flex flex-col gap-8 p-5">
      <Badge
        variant="outline"
        className="w-fit gap-1 border-primary px-3 py-1.5 text-base font-bold uppercase"
      >
        <LayoutGridIcon className="size-4 fill-foreground" />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.slug}/products`}>
            <CategoryItem category={category} />
          </Link>
        ))}
      </div>
    </main>
  )
}
