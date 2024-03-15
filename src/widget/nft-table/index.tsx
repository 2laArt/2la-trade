'use client'
import { ITableSectionExternal, TableSection } from '@/features/table-section'
import { createNftColumns } from './columns'
import Link from 'next/link'
import { paths } from '@/shared/routing'
import { type INft } from '@/entities/nft/model'

const mobile = ['']
const laptop = ['VOLUME']
const getHref = (slug: string, blockchain: number) =>
  paths.nftSlug(slug, blockchain)
interface INftTable extends ITableSectionExternal<INft> {
  symbol: string
}
export const NftTable = ({ symbol, ...props }: INftTable) => {
  const columns = createNftColumns(symbol)
  return (
    <TableSection
      columns={columns}
      laptopCols={laptop}
      mobileCols={mobile}
      TableRowLink={({ row }) => (
        <Link
          href={getHref(row.original.slug, row.original.blockchain)}
          className="absolute top-0 left-0 block w-full h-full z-[1]"
        />
      )}
      {...props}
    />
  )
}
