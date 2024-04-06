import { ColumnDef } from '@tanstack/react-table'
import { formatDate, priceWithSuffix } from '@/shared/lib'
import React from 'react'
import { ColumnFilterButton } from '@/features/table-section'
import { type INftWhale, type INft } from '@/entities/nft/model'

const symbol = 'ETH'

export const whalesColumns: ColumnDef<INftWhale>[] = [
  {
    accessorKey: 'index',
    enableHiding: false,
    header: ({ column }) => <ColumnFilterButton column={column} text="#" />,
    cell: ({ row }) => {
      const index: number = row.getValue('index')
      return (
        <div className="capitalize flex items-center gap-2 ml-2">{index}</div>
      )
    },
  },

  {
    accessorKey: 'buyer',
    header: ({ column }) => {
      return (
        <div className="text-left">
          <ColumnFilterButton column={column} text="BUYER" />
        </div>
      )
    },
    cell: ({ row }) => {
      const buyer = (row.getValue('buyer') as string).substring(0, 6)
      return <div className="py-2"> {buyer} </div>
    },
  },
  {
    accessorKey: 'collection',
    enableHiding: false,
    header: ({ column }) => (
      <ColumnFilterButton column={column} text="COLLECTION" />
    ),
    cell: ({ row }) => {
      const collection: string = row.getValue('collection')
      return <div className="truncate max-w-24 md:max-w-44">{collection}</div>
    },
  },
  {
    accessorKey: 'value',
    enableHiding: false,
    header: ({ column }) => (
      <ColumnFilterButton column={column} text={`VALUE (${symbol})`} />
    ),
    cell: ({ row }) => {
      const value: number = row.getValue('value')
      return (
        <div className=" pl-1">
          {value} {symbol}
        </div>
      )
    },
  },
  {
    accessorKey: 'gas',
    header: ({ column }) => (
      <ColumnFilterButton column={column} text={`GAS (${symbol})`} />
    ),
    cell: ({ row }) => {
      const gas: number = row.getValue('gas')
      return (
        <div>
          {gas} {symbol}
        </div>
      )
    },
  },
  {
    accessorKey: 'id',
    header: ({ column }) => <ColumnFilterButton column={column} text={`ID`} />,
    cell: ({ row }) => {
      const id: number = row.getValue('id')
      return <div> {id} </div>
    },
  },
  {
    id: 'timestamp',
    accessorKey: 'transaction_time',
    header: ({ column }) => (
      <ColumnFilterButton column={column} text={`TIMESTAMP`} />
    ),
    cell: ({ row }) => {
      const time: number = row.getValue('timestamp')
      const date = formatDate(time)
      return <div> {date} </div>
    },
  },
]
