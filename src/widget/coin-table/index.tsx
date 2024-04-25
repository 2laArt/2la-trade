'use client'
import {
  type ITableSectionExternal,
  TableSection,
} from '@/features/table-section'
import { getCoinColumns } from './columns'
import { type ITopMovers } from '@/entities/coins-list'
import Link from 'next/link'
import { paths } from '@/shared/routing'
import { useUserCart } from '@/entities/cart/context'
import React, { Suspense } from 'react'
import { Row } from '@tanstack/react-table'

const mobile = ['price']
const laptop = ['chart', 'market cap']
const getHref = (slug?: string) => paths.coinSlug(slug || '')

export const CoinTable = (
  props: ITableSectionExternal<Partial<ITopMovers>>
) => {
  const { userCart } = useUserCart()
  const coinColumns = getCoinColumns(userCart)
  const TableRowLink = React.useCallback(
    ({ row }: { row: Row<Partial<ITopMovers>> }) => (
      <Link
        href={getHref(row.original.slug)}
        className="absolute top-0 left-0 block w-full h-full z-[1]"
      />
    ),
    []
  )
  return (
    <Suspense>
      <TableSection
        columns={coinColumns}
        laptopCols={laptop}
        mobileCols={mobile}
        TableRowLink={TableRowLink}
        {...props}
      />
    </Suspense>
  )
}
