'use client'
import {
  type ITableSectionExternal,
  TableSection,
} from '@/features/table-section'
import Link from 'next/link'
import { whalesColumns } from './columns'
import { type INftWhale } from '@/entities/nft/model'

const mobile = ['buyer']
const laptop = ['gas', 'id']
const path = 'https://etherscan.io/tx/'

export const NftTableWhales = ({
  ...props
}: ITableSectionExternal<INftWhale>) => {
  const columns = whalesColumns
  return (
    <TableSection
      columns={columns}
      laptopCols={laptop}
      mobileCols={mobile}
      TableRowLink={({ row }) => (
        <Link
          href={`${path}${row.original.tx_hash}`}
          target="_blank"
          className="absolute top-0 left-0 block w-full h-full z-[1]"
        />
      )}
      {...props}
    />
  )
}
