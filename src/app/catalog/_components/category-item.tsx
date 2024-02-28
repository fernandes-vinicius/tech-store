import Image from 'next/image'

import { type Category } from '@prisma/client'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="flex flex-col">
      <div className="flex h-[150px] w-full items-center justify-center rounded-t-lg bg-category-item-gradient">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[78%] w-auto max-w-[80%]"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="rounded-b-lg bg-accent py-3 text-center">
        <p className="text-sm font-bold">{category.name}</p>
      </div>
    </div>
  )
}
