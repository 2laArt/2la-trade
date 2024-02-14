'use client'
import { type FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { CoinListProvider, useCoinList } from '../context'
import { percentageChange, presentationPrice } from '../lib'
import { formatToCurrency } from '@/shared/lib'
import { Button } from '@/shared/ui'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table'

import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons'

const rowStyle = ''

export const CoinTableUI: FC = () => {
  // const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })
  const { coinList } = useCoinList()

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
          <TableHead className="pr-5" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {coinList.map((coin, idx) => (
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
                {coin.name} <br />{' '}
                <span className="font-normal">{coin.symbol}</span>
              </span>
            </TableCell>
            <TableCell>
              $ {formatToCurrency(coin.usd_price, { maximumFractionDigits: 2 })}
            </TableCell>
            <TableCell
              className={
                coin.usd_price_change_24h > 0
                  ? 'text-green-500 dark:text-green-600'
                  : 'text-red-600 dark:text-red-700'
              }
            >
              {percentageChange(coin.usd_price_change_24h)}
            </TableCell>
            <TableCell>{presentationPrice(coin.usd_volume_24h, '$')}</TableCell>
            <TableCell>{presentationPrice(coin.usd_marketcap, '$')}</TableCell>
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
