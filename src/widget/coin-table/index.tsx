'use client'
import { ITableSectionExternal, TableSection } from '@/features/table-section'
import { coinColumns } from './columns'
import { type ITopMovers } from '@/entities/coins-list'
import Link from 'next/link'
import { paths } from '@/shared/routing'

const mobile = ['price']
const laptop = ['chart', 'market cap']
const getHref = (slug?: string) => paths.coinSlug(slug || '')
export const CoinTable = (
  props: ITableSectionExternal<Partial<ITopMovers>>
) => (
  <TableSection
    columns={coinColumns}
    laptopCols={laptop}
    mobileCols={mobile}
    TableRowLink={({ row }) => (
      <Link
        href={getHref(row.original.slug)}
        className="absolute top-0 left-0 block w-full h-full z-[1]"
      />
    )}
    {...props}
  />
)
