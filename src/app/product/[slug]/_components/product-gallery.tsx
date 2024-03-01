'use client'

import Image from 'next/image'

import { useState } from 'react'

import { cn } from '@/lib/utils'

interface ProductGalleryProps {
  name: string
  imageUrls: string[]
}

export function ProductGallery({ name, imageUrls }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(imageUrls[0])

  function handleSelectImage(imageUrl: string) {
    setSelectedImage(imageUrl)
  }

  return (
    <div className="flex flex-col gap-8 lg:min-h-full">
      <div className="flex h-[380px] w-full items-center justify-center overflow-hidden bg-accent lg:h-full lg:flex-1 lg:rounded-lg">
        <Image
          src={selectedImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 px-5 lg:px-0">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            type="button"
            role="button"
            aria-label="Select image"
            onClick={() => handleSelectImage(imageUrl)}
            className={cn(
              'flex h-[77px] w-full items-center justify-center rounded-lg bg-accent',
              imageUrl === selectedImage && 'ring-2 ring-primary ring-offset-2',
            )}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
