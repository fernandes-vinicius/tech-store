import { LayoutGridIcon } from 'lucide-react'

import { prisma } from '@/lib/prisma'
import { Badge } from '@/components/ui/badge'

import { CategoryItem } from './_components/category-item'

export default async function CatalogPage() {
  const categories = await prisma.category.findMany()

  return (
    <main className="flex flex-col gap-8 p-5">
      <Badge
        variant="outline"
        className="w-fit gap-1 border-primary px-3 py-1.5 text-base font-bold uppercase"
      >
        <LayoutGridIcon className="size-4 fill-foreground" />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </main>
  )
}
