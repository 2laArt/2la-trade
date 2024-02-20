import { Column, ColumnDef } from '@tanstack/react-table'
import { Button, Checkbox } from '@/shared/ui'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { type ICoinList } from '../../context'
import {
  cn,
  formatPercentage,
  formatToCurrency,
  priceWithSuffix,
} from '@/shared/lib'
import React from 'react'
import { SmallChart } from '@/features/small-chart'

const HeaderButton: React.FC<{
  column: Column<ICoinList, unknown>
  text: string
}> = ({ column, text }) => (
  <Button
    variant="ghost"
    className="uppercase max-md:p-1"
    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  >
    {text}
    <CaretSortIcon className="ml-2 h-4 w-4" />
  </Button>
)

export const coinColumns: ColumnDef<ICoinList>[] = [
  {
    accessorKey: 'rank',
    enableHiding: false,
    header: ({ column }) => <HeaderButton column={column} text="#" />,
    cell: ({ row }) => (
      <div className="ml-2 capitalize flex items-center gap-2">
        <Checkbox
          size="lg"
          className="max-sm:w-4"
          variant="star"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
        {row.getValue('rank')}
      </div>
    ),
  },

  {
    id: 'naming',
    enableHiding: false,
    accessorFn: ({ name, symbol, icon }) => `${name}!${symbol}!${icon}`,
    header: ({ column }) => {
      return <HeaderButton column={column} text="Name" />
    },
    cell: ({ row }) => {
      const [name, symbol, icon] = (row.getValue('naming') as string).split('!')
      return (
        <div className="flex items-center py-2">
          <span className=" w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-full inline-block bg-slate-300 text-center leading-10 max-sm:leading-8 dark:bg-slate-700 mr-1">
            {symbol.slice(0, 3)}
          </span>
          <span className="inline-block">
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
      return (
        <span>
          ${' '}
          {formatToCurrency(row.getValue('price'), {
            maximumFractionDigits: 2,
          })}
        </span>
      )
    },
  },
  {
    id: '24H Change',
    accessorKey: 'usd_price_change_24h',
    header: ({ column }) => <HeaderButton column={column} text="24H Change" />,
    cell: ({ row }) => {
      const value = row.getValue('24H Change') as number
      const styles = (percent: number) =>
        percent > 0
          ? 'text-green-500 dark:text-green-600'
          : 'text-red-600 dark:text-red-700'
      return (
        <div className={cn(styles(value), 'pl-7')}>
          {formatPercentage(value)}
        </div>
      )
    },
  },
  {
    id: '24H Volume',
    accessorKey: 'usd_volume_24h',
    header: () => <div>24H Volume</div>,
    cell: ({ row }) => {
      const value = row.getValue('24H Volume') as number
      return <span>{priceWithSuffix(value, '$')}</span>
    },
  },
  {
    id: 'market cap',
    accessorKey: 'usd_marketcap',
    header: () => <div>market cap</div>,
    cell: ({ row }) => {
      const value = row.getValue('market cap') as number
      return <span>{priceWithSuffix(value, '$')}</span>
    },
  },
  {
    id: 'chart',
    accessorKey: 'prices',
    header: () => <div className="ml-4">7D Chart</div>,
    cell: ({ row }) => {
      const value = row.getValue('chart') as number[]
      const percent = row.getValue('24H Change') as number

      return (
        <SmallChart prices={value} className={'w-28 h-10'} percent={percent} />
      )
    },
  },
  {
    accessorKey: 'trade',
    enableHiding: false,
    header: () => <div className="text-right"></div>,
    cell: ({ row }) => {
      return (
        <div className="text-right">
          <Button
            className="bg-blue-600 max-sm:text-xs max-sm:px-2 text-white"
            variant={'outline'}
          >
            Trade
          </Button>
        </div>
      )
    },
  },
]
