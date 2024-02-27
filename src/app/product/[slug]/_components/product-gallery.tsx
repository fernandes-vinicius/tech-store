'use client'

import { useState } from 'react'

import Image from 'next/image'

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
    <div className="flex flex-col gap-8">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={selectedImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 px-5">
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
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{ objectFit: 'contain' }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
