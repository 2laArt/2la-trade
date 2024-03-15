'use client'
import Image from 'next/image'
import React from 'react'

export const NftImagesSection: React.FC<{ images?: string[] }> = ({
  images,
}) => {
  const isImages = !!images?.length
  if (!isImages) return
  return (
    <div className="card p-6">
      <h6 className="font-semibold text-xl mb-6">Collection</h6>
      <div className="flex gap-2 max-md:flex-wrap">
        {images.map((url, idx) => (
          <div
            key={url}
            className="relative w-[calc(50%-8px)] md:1/4 aspect-square"
          >
            <Image
              src={url}
              alt={`nft image ${idx}`}
              fill
              sizes="(max-width: 768px) 25%, 50%"
              className="skeleton"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
