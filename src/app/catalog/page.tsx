import type { Metadata } from 'next'
import Link from 'next/link'

import { LayoutGridIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { db } from '@/lib/prisma'

import { CategoryItem } from './_components/category-item'

export const metadata: Metadata = {
  title: 'Catálogo',
}

export default async function CatalogPage() {
  const categories = await db.category.findMany()

  return (
    <main role="main" id="catalog" className="flex flex-col gap-8 p-5">
      <Badge variant="heading">
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
