import { ColumnDef } from '@tanstack/react-table'
import { Checkbox, Percentage } from '@/shared/ui'
import { formatToCurrency, priceWithSuffix } from '@/shared/lib'
import React from 'react'
import { ColumnFilterButton } from '@/features/table-section'
import { type INft } from '@/entities/nft/model'
import Image from 'next/image'

export const createNftColumns = (symbol: string): ColumnDef<INft>[] => [
  {
    id: 'COUNT',
    accessorFn: ({ index, slug }) => ({ index, slug }),
    enableHiding: false,
    sortingFn: (rowA, rowB, columnId) => {
      const a = (rowA.getValue(columnId) as INft).index
      const b = (rowB.getValue(columnId) as INft).index
      return a < b ? 1 : a > b ? -1 : 0
    },
    header: ({ column }) => <ColumnFilterButton column={column} text="#" />,
    cell: ({ row }) => {
      const { index, slug } = row.getValue('COUNT') as INft
      return (
        <div className="capitalize flex items-center gap-2 ml-2">{index}</div>
      )
    },
  },

  {
    id: 'NAMING',
    enableHiding: false,
    accessorFn: ({ name, image_url }) => ({ name, image_url }),
    sortingFn: (rowA, rowB, columnId) => {
      const a = (rowA.getValue(columnId) as INft).name
      const b = (rowB.getValue(columnId) as INft).name
      return a < b ? 1 : a > b ? -1 : 0
    },
    header: ({ column }) => {
      return (
        <div className="text-left">
          {' '}
          <ColumnFilterButton column={column} text="Name" />
        </div>
      )
    },
    cell: ({ row }) => {
      const { name, image_url } = row.getValue('NAMING') as INft

      return (
        <div className="flex items-center py-2">
          <Image
            src={image_url}
            width={40}
            height={40}
            alt={`${name} image`}
            className="mr-2"
            priority={false}
          />
          <span className="inline-block truncate text-left max-w-32">
            {name}
          </span>
        </div>
      )
    },
  },
  {
    id: 'FLOOR PRICE',
    enableHiding: false,
    accessorFn: ({ floor_price, price_change_7d }) => ({
      floor_price,
      price_change_7d,
    }),
    header: ({ column }) => (
      <ColumnFilterButton column={column} text="FLOOR PRICE / % CHANGE" />
    ),
    cell: ({ row }) => {
      const { floor_price, price_change_7d } = row.getValue(
        'FLOOR PRICE'
      ) as INft
      return (
        <div className="inline-flex gap-2 pl-2 max-sm:flex-col">
          <div>
            <span>
              {formatToCurrency(+floor_price, {
                maximumFractionDigits: 2,
              })}
            </span>

            <span>{symbol}</span>
          </div>
          <Percentage percent={+price_change_7d} />
        </div>
      )
    },
  },
  {
    id: 'VOLUME',
    accessorFn: ({ volume_7d, volume_change_7d }) => ({
      volume_7d,
      volume_change_7d,
    }),
    header: ({ column }) => (
      <ColumnFilterButton column={column} text="VOLUME (7D) / % CHANGE" />
    ),
    cell: ({ row }) => {
      const { volume_7d, volume_change_7d } = row.getValue('VOLUME') as INft
      return (
        <div className="flex gap-2 pl-1">
          <span>
            {formatToCurrency(volume_7d, {
              maximumFractionDigits: 2,
            })}
          </span>
          <span>{symbol}</span>
          <Percentage percent={volume_change_7d} />
        </div>
      )
    },
  },
  {
    id: 'COLLECTION',
    accessorFn: ({ market_cap, total_volume }) => ({
      market_cap,
      total_volume,
    }),
    header: ({ column }) => (
      <ColumnFilterButton column={column} text="COLLECTION VALUE" />
    ),
    cell: ({ row }) => {
      const { market_cap, total_volume } = row.getValue('COLLECTION') as INft
      const value = market_cap || total_volume || 0
      return (
        <div className="pl-2">
          <span>{priceWithSuffix(value, '')}</span>
          <span className="ml-2">{symbol}</span>
        </div>
      )
    },
  },
]
