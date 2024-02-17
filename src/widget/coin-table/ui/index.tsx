'use client'
import { type FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { CoinListProvider, useCoinList } from '../context'
import { percentageChange, presentationPrice } from '../lib'
import { cn, formatToCurrency } from '@/shared/lib'
import { Button } from '@/shared/ui'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons'
import { SmallChart } from './small-chart'

const rowStyle = ''

export const CoinTableUI: FC = () => {
  // const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })
  const {
    coinList: { data, total },
  } = useCoinList()
  const stylePercent = (percent: number) =>
    percent > 0
      ? 'text-green-500 dark:text-green-600'
      : 'text-red-600 dark:text-red-700'
  return (
    <Table className="dark:bg-slate-900 bg-white font-medium">
      <TableHeader className="border-b-2 border-muted dark:border-background pointer-events-none">
        <TableRow>
          <TableHead className="pl-5 py-3">#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>24H Change</TableHead>
          <TableHead>24H Volume</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>7D Chart</TableHead>
          <TableHead className="pr-5" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((coin, idx) => (
          <TableRow
            key={coin.id}
            className="border-b-2 border-muted dark:border-background hover:bg-muted/50 dark:hover:bg-background/20"
          >
            <TableCell className="font-medium pl-5">{++idx}</TableCell>
            <TableCell className=" flex items-center py-4">
              <span className="inline-block w-10 h-10 rounded-full bg-slate-300 leading-10 text-center dark:bg-slate-700 mr-1">
                {coin.symbol.slice(0, 3)}
              </span>
              <span className="inline-block">
                {coin.name} <br />
                <span className="font-normal">{coin.symbol}</span>
              </span>
            </TableCell>
            <TableCell>
              $ {formatToCurrency(coin.usd_price, { maximumFractionDigits: 2 })}
            </TableCell>
            <TableCell className={stylePercent(coin.usd_price_change_24h)}>
              {percentageChange(coin.usd_price_change_24h)}
            </TableCell>
            <TableCell>{presentationPrice(coin.usd_volume_24h, '$')}</TableCell>
            <TableCell>{presentationPrice(coin.usd_marketcap, '$')}</TableCell>
            <TableCell>
              <SmallChart
                prices={[...coin.prices]}
                className={cn(
                  'w-32 h-12',
                  coin.usd_price_change_24h > 0
                    ? 'stroke-green-600'
                    : 'stroke-red-600'
                )}
              />
            </TableCell>
            <TableCell className="pr-5 text-right">
              <Button className="bg-blue-600 text-white" variant={'outline'}>
                Trade
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
export const CoinTable = () => (
  <CoinListProvider>
    <CoinTableUI />
  </CoinListProvider>
)
