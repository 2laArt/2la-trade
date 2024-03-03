import { Column, ColumnDef } from '@tanstack/react-table'
import { Button, Checkbox, Percentage, TokenIcon } from '@/shared/ui'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { formatToCurrency, priceWithSuffix } from '@/shared/lib'
import React from 'react'
import { SmallChart } from '@/features/small-chart'
import { type ITopMovers } from '@/entities/coin'

const HeaderButton: React.FC<{
  column: Column<Partial<ITopMovers>, unknown>
  text: string
}> = ({ column, text }) => (
  <Button
    variant="ghost"
    className="uppercase text-center max-md:p-1"
    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  >
    {text}
    <CaretSortIcon className="ml-2 h-4 w-4" />
  </Button>
)
export const coinColumns: ColumnDef<Partial<ITopMovers>>[] = [
  {
    id: 'count',
    accessorFn: ({ rank, token_id }) => `${rank ?? ''}!${token_id}`,
    enableHiding: false,
    header: ({ column }) => <HeaderButton column={column} text="#" />,
    cell: ({ row }) => {
      const [rank, token_id] = (row.getValue('count') as string).split('!')
      return (
        <div className="ml-2 capitalize flex items-center gap-2">
          <Checkbox
            size="lg"
            className="max-sm:w-4"
            variant="star"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
          {rank || token_id}
        </div>
      )
    },
  },

  {
    id: 'naming',
    enableHiding: false,
    accessorFn: ({ name, symbol, slug, token_id }) =>
      `${name}!${symbol}!${slug}!${token_id}`,
    header: ({ column }) => {
      return <HeaderButton column={column} text="Name" />
    },
    cell: ({ row }) => {
      const [name, symbol, slug, token_id] = (
        row.getValue('naming') as string
      ).split('!')

      return (
        <div className="flex items-center py-2">
          <TokenIcon
            slug={slug}
            symbol={symbol}
            token_id={+token_id}
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
    accessorKey: 'usd_price',
    header: ({ column }) => <HeaderButton column={column} text="Price" />,
    cell: ({ row }) => {
      const value: number = row.getValue('price')

      const content = !!value
        ? `$ ${formatToCurrency(value, {
            maximumFractionDigits: 2,
          })}`
        : 'N/A'
      return <span>{content}</span>
    },
  },
  {
    id: '24H Change',
    accessorKey: 'usd_price_change_24h',
    header: ({ column }) => <HeaderButton column={column} text="24H Change" />,
    cell: ({ row }) => {
      const value = row.getValue('24H Change') as number
      if (!value) return <span>N/A</span>
      return <Percentage percent={value} className="pl-7" />
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
              className="bg-blue-600 max-sm:text-xs max-sm:px-2 text-white"
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
