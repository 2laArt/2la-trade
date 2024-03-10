import { Each } from '@/shared/ui'
import React from 'react'

export const CoinTags: React.FC<{ tags: string[]; count?: number }> = ({
  tags,
  count = 10,
}) => {
  return (
    <div className="card p-6">
      <h5 className="mb-5 text-base font-semibold">General Information</h5>
      <div className="flex gap-3 flex-wrap text-xs">
        <Each
          arr={tags.slice(0, count)}
          render={(item) => (
            <span className="capitalize inline-block px-2 py-1 rounded-sm bg-blue-600 bg-opacity-20 text-blue-500">
              {item}
            </span>
          )}
        />
      </div>
    </div>
  )
}
