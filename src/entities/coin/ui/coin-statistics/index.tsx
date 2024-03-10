'use client'
import React from 'react'
import { useQueryCoinStatistics } from '../../model'
import { Each } from '@/shared/ui'
import { formatToCurrency } from '@/shared/lib'

export const CoinStatistics: React.FC<{ slug: string }> = ({ slug }) => {
  const { data, isLoading } = useQueryCoinStatistics({ slug })
  const sortedData = React.useMemo(
    () => (data ? data.sort((a, b) => a.period.localeCompare(b.period)) : []),
    [data]
  )
  return (
    <div className="card p-6 font-semibold">
      <h5 className="capitalize">
        <span>{slug}</span> Price Statistics
      </h5>
      <div className="text-sm">
        {isLoading ? (
          <Each
            arr={Array.from({ length: 5 })}
            render={() => (
              <div className="flex justify-between items-center my-3">
                <div className="skeleton w-6/12 h-10 rounded-lg"></div>
                <div className="skeleton w-4/12 h-10 rounded-lg"></div>
              </div>
            )}
          />
        ) : (
          <Each
            arr={sortedData}
            render={(item) => (
              <div className="flex justify-between items-center my-3">
                <div>
                  {item.period} high / {item.period} low
                </div>
                <div className="text-left">
                  {`$ ${formatToCurrency(item.high, {
                    maximumFractionDigits: 2,
                  })}`}{' '}
                  / <br />
                  {`$ ${formatToCurrency(item.low, {
                    maximumFractionDigits: 2,
                  })}`}
                </div>
              </div>
            )}
          />
        )}
      </div>
    </div>
  )
}

export default CoinStatistics
