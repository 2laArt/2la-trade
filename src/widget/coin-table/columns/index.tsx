import { type ColumnDef } from '@tanstack/react-table'
import { Button, Checkbox, Percentage, TokenIcon } from '@/shared/ui'
import { formatToCurrency, priceWithSuffix } from '@/shared/lib'
import React from 'react'
import { SmallChart } from '@/features/small-chart'
import { type ITopMovers } from '@/entities/coins-list'
import { ColumnFilterButton } from '@/features/table-section'
import { SwitchCoinInCart } from '@/features/cart/ui/switch-coin-in-cart'
import type { ICreationCoin, IUserCart } from '@/entities/cart/model'

export const getCoinColumns = (
  cart?: IUserCart
): ColumnDef<Partial<ITopMovers>>[] => [
  {
    id: 'count',
    accessorFn: ({ rank, token_id, name, slug, symbol, usd_price }) => ({
      rank,
      token_id,
      name,
      slug,
      symbol,
      usd_price,
    }),
    enableHiding: false,
    sortingFn: (rowA, rowB, columnId) => {
      const rankA = (rowA.getValue(columnId) as Partial<ITopMovers>).rank
      const rankB = (rowB.getValue(columnId) as Partial<ITopMovers>).rank
      if (rankA && rankB) return rankA < rankB ? 1 : rankA > rankB ? -1 : 0

      const idA = (rowA.getValue(columnId) as Partial<ITopMovers>).token_id
      const idB = (rowB.getValue(columnId) as Partial<ITopMovers>).token_id
      if (idA && idB) return idA < idB ? 1 : idA > idB ? -1 : 0

      return -1
    },
    header: ({ column }) => <ColumnFilterButton column={column} text="#" />,
    cell: ({ row }) => {
      const { rank, token_id, name, prices, slug, symbol, usd_price } =
        row.getValue('count') as Partial<ITopMovers>
      const coin: ICreationCoin = {
        name: name || '',
        price: usd_price || 0,
        slug: slug || '',
        symbol: symbol || '',
        tokenId: token_id || 0,
      }

      return (
        <div className="capitalize flex items-center gap-2">
          {cart && <SwitchCoinInCart coin={coin} cart={cart} />}
          {rank || token_id}
        </div>
      )
    },
  },

  {
    id: 'naming',
    enableHiding: false,
    accessorFn: ({ name, symbol, slug, token_id }) => ({
      name,
      symbol,
      slug,
      token_id,
    }),
    sortingFn: (rowA, rowB, columnId) => {
      const a = (rowA.getValue(columnId) as Partial<ITopMovers>).name
      const b = (rowB.getValue(columnId) as Partial<ITopMovers>).name
      if (a && b) return a < b ? 1 : a > b ? -1 : 0

      return -1
    },
    header: ({ column }) => {
      return (
        <div className="text-left">
          <ColumnFilterButton column={column} text="Name" />
        </div>
      )
    },
    cell: ({ row }) => {
      const { name, symbol, slug, token_id } = row.getValue(
        'naming'
      ) as Partial<ITopMovers>
      return (
        <div className="flex items-center py-2">
          <TokenIcon
            slug={slug || 'coin'}
            symbol={symbol || 'coin'}
            token_id={token_id || 0}
            className="mr-2"
          />
          <span className="inline-block truncate text-left max-w-32">
            {name} <br />
            <span className="font-normal">{symbol}</span>
          </span>
        </div>
      )
    },
  },
  {
    id: 'price',
    accessorFn: ({ usd_price, usd_price_change_24h }) => ({
      usd_price,
      usd_price_change_24h,
    }),
    sortingFn: (rowA, rowB, columnId) => {
      const a = (rowA.getValue(columnId) as Partial<ITopMovers>).usd_price
      const b = (rowB.getValue(columnId) as Partial<ITopMovers>).usd_price
      if (a && b) return a < b ? 1 : a > b ? -1 : 0
      return -1
    },
    header: ({ column }) => <ColumnFilterButton column={column} text="Price" />,
    cell: ({ row }) => {
      const { usd_price, usd_price_change_24h } = row.getValue(
        'price'
      ) as Partial<ITopMovers>

      const price = !!usd_price
        ? `$ ${formatToCurrency(+usd_price, {
            maximumFractionDigits: 2,
          })}`
        : 'N/A'
      return (
        <div>
          <span className="ml-1">{price}</span>
          <span className="max-md:block hidden mt-1">
            {usd_price_change_24h ? (
              <Percentage percent={usd_price_change_24h} />
            ) : (
              'N/A'
            )}
          </span>
        </div>
      )
    },
  },
  {
    id: '24H Change',
    accessorKey: 'usd_price_change_24h',

    header: ({ column }) => (
      <ColumnFilterButton column={column} text="24H Change" />
    ),
    cell: ({ row }) => {
      const value = row.getValue('24H Change') as number
      return value ? <Percentage percent={value} /> : <span>N/A</span>
    },
  },
  {
    id: '24H Volume',
    accessorKey: 'usd_volume_24h',
    header: () => <div>24H Volume</div>,
    cell: ({ row }) => {
      const value = row.getValue('24H Volume') as number
      const content = !!value ? priceWithSuffix(value, '$') : 'N/A'
      return <span>{content}</span>
    },
  },
  {
    id: 'market cap',
    accessorKey: 'usd_marketcap',
    header: () => <div>market cap</div>,
    cell: ({ row }) => {
      const value = row.getValue('market cap') as number
      const content = !!value ? priceWithSuffix(value, '$') : 'N/A'
      return <span>{content}</span>
    },
  },
  {
    id: 'chart',
    accessorKey: 'prices',
    header: () => <div className="ml-4">7D Chart</div>,
    cell: ({ row }) => {
      const prices = row.getValue('chart')
      const percent = row.getValue('24H Change')

      return (
        <div>
          <SmallChart
            prices={prices as number[]}
            className={'w-28 h-10'}
            percent={percent as number}
          />
        </div>
      )
    },
  },
  {
    accessorKey: 'trade',
    enableHiding: false,
    header: () => <div className="text-right"></div>,
    cell: ({ row }) => {
      const value: number = row.getValue('price')
      return (
        <div className="text-right">
          {!!value && (
            <Button
              className="bg-blue-600 max-sm:text-xs max-sm:px-2 text-white relative z-[2]"
              variant={'outline'}
            >
              Trade
            </Button>
          )}
        </div>
      )
    },
  },
]
