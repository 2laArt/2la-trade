import { priceWithSuffix } from '@/shared/lib'
import React from 'react'

export const ListCapitalizations: React.FC<{
  currency: string
  volume_24: number
  cap: number
  supply: number
  max_supply: number
  total_supply: number
  symbol: string
  prefix: string
}> = ({
  currency,
  cap,
  max_supply,
  supply,
  total_supply,
  volume_24,
  symbol,
  prefix,
}) => {
  return (
    <ul className="flex mt-8 justify-between items-center [&>li>h6]:text-xs [&>li>h6]:text-gray-500 [&>li>h6]:font-bold [&>li>h6]:mb-2">
      <li>
        <h6>Market Cap ({currency})</h6>
        <span> {priceWithSuffix(cap, prefix)}</span>
      </li>
      <li>
        <h6>24H VOLUME ({currency})</h6>
        <span> {priceWithSuffix(volume_24, prefix)}</span>
      </li>
      <li>
        <h6>Circulating Supply</h6>
        <span>
          {' '}
          {priceWithSuffix(supply, '')} {symbol}
        </span>
      </li>
      <li>
        <h6>Max Supply</h6>
        <span>
          {' '}
          {priceWithSuffix(max_supply, '')} {symbol}
        </span>
      </li>
      <li>
        <h6>Total Supply</h6>
        <span>
          {' '}
          {priceWithSuffix(total_supply, '')} {symbol}
        </span>
      </li>
    </ul>
  )
}
