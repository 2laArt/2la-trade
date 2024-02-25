'use client'
import {
  Button,
  Each,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui'
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import React from 'react'
import { coinColumns } from './colums'
import { SelectDisplayColumn } from './select-display-column'
import { CoinsTableFooter } from './footer'
import { ICoinList, useQueryCoinsPage } from '@/entities/coin'
import { CoinTableBody } from './body-rows'

interface ICoinTable {
  coinsPage: ICoinList
  limit: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
export const CoinTableUI: React.FC<ICoinTable> = ({
  coinsPage,
  limit,
  page,
  setPage,
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const table = useReactTable({
    data: coinsPage.data,
    columns: coinColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
  const totalPages = coinsPage?.total ?? 1 / limit
  const selectedRow = table.getFilteredSelectedRowModel().rows.length
  const allRows = table.getFilteredRowModel().rows.length
  const headerRows = table.getHeaderGroups()
  const bodyRows = table.getRowModel().rows

  React.useEffect(() => {
    console.log('table render')
  })
  return (
    <div className="w-full">
      <SelectDisplayColumn table={table} />
      <div>
        <Table className="dark:bg-slate-900 max-sm:text-xs bg-white font-medium">
          <TableHeader className="border-b-2 border-muted dark:border-background uppercase">
            {headerRows.map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                <Each
                  arr={headerGroup.headers}
                  render={(item) => (
                    <TableHead className="max-sm:px-1" key={item.id}>
                      {item.isPlaceholder
                        ? null
                        : flexRender(
                            item.column.columnDef.header,
                            item.getContext()
                          )}
                    </TableHead>
                  )}
                />
              </TableRow>
            ))}
          </TableHeader>
          <CoinTableBody rows={bodyRows} />
        </Table>
      </div>
      <CoinsTableFooter
        allRows={allRows}
        page={page}
        setPage={setPage}
        selectedRows={selectedRow}
        totalPages={totalPages}
      />
    </div>
  )
}
export const CoinTable = () => {
  const [page, setPage] = React.useState<number>(1)
  const { data: coinsPage } = useQueryCoinsPage({ page, limit: 50 })
  const initial = { data: [], total: 0 }
  return (
    <CoinTableUI
      coinsPage={coinsPage ?? initial}
      limit={50}
      page={page}
      setPage={setPage}
    />
  )
}
