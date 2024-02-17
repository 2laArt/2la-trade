import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Button, Checkbox } from '@/shared/ui'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { ICoinList } from '../../context'
import { cn, formatToCurrency } from '@/shared/lib'
import { percentageChange, presentationPrice } from '../../lib'
import { SmallChart } from '../small-chart'

export const coinColumns: ColumnDef<ICoinList>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        variant="star"
        size="lg"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        size="lg"
        variant="star"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'rank',
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="p-0"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        #
        <CaretSortIcon className=" h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="ml-2 capitalize">{row.getValue('rank')}</div>
    ),
  },

  {
    id: 'naming',
    accessorFn: ({ name, symbol, icon }) => `${name}!${symbol}!${icon}`,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const [name, symbol, icon] = (row.getValue('naming') as string).split('!')
      return (
        <div className="flex items-center py-4">
          <span className=" w-10 h-10 rounded-full inline-block bg-slate-300 text-center leading-10 dark:bg-slate-700 mr-1">
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
    accessorKey: 'usd_price',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Price
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <span>
          ${' '}
          {formatToCurrency(row.getValue('usd_price'), {
            maximumFractionDigits: 2,
          })}
        </span>
      )
    },
  },
  {
    accessorKey: 'usd_price_change_24h',
    header: () => <div>24H Change</div>,
    cell: ({ row }) => {
      const value = row.getValue('usd_price_change_24h') as number
      const stylePercent = (percent: number) =>
        percent > 0
          ? 'text-green-500 dark:text-green-600'
          : 'text-red-600 dark:text-red-700'
      return (
        <span className={stylePercent(value)}>{percentageChange(value)}</span>
      )
    },
  },
  {
    accessorKey: 'usd_volume_24h',
    header: () => <div>24H Volume</div>,
    cell: ({ row }) => {
      const value = row.getValue('usd_volume_24h') as number
      return <span>{presentationPrice(value, '$')}</span>
    },
  },
  {
    accessorKey: 'usd_marketcap',
    header: () => <div>24H Change</div>,
    cell: ({ row }) => {
      const value = row.getValue('usd_marketcap') as number
      return <span>{presentationPrice(value, '$')}</span>
    },
  },
  {
    accessorKey: 'prices',
    header: () => <div className="ml-4">7D Chart</div>,
    cell: ({ row }) => {
      const value = row.getValue('prices') as number[]
      const percent = row.getValue('usd_price_change_24h') as number

      return (
        <SmallChart
          prices={value}
          className={cn(
            'w-32 h-12',
            percent > 0 ? 'stroke-green-600' : 'stroke-red-600'
          )}
        />
      )
    },
  },
  {
    accessorKey: 'trade',
    header: () => <div className="text-right"></div>,
    cell: ({ row }) => {
      return (
        <Button className="bg-blue-600 text-white" variant={'outline'}>
          Trade
        </Button>
      )
    },
  },
]
