'use client'
import {
  Button,
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
import { CoinListProvider, useCoinList } from '../context'
import { SelectDisplayColumn } from './select-display-column'
import { cn } from '@/shared/lib'

const CoinTableUI = () => {
  const {
    coinList: { data, total },
    getTableItems,
  } = useCoinList()
  const [page, setPage] = React.useState<number>(1)
  const [limit, setLimit] = React.useState<number>(50)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const table = useReactTable({
    data,
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
  const totalPages = total / limit
  const getPrevPage = () => {
    if (page < 1) return
    setPage((prev) => --prev)
    getTableItems(page - 1, limit)
  }
  const getNextPage = () => {
    if (totalPages < page) return
    setPage((prev) => ++prev)
    getTableItems(page + 1, limit)
  }
  React.useEffect(() => {
    getTableItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="w-full">
      <SelectDisplayColumn table={table} />
      <div>
        <Table className="dark:bg-slate-900 max-sm:text-xs bg-white font-medium">
          <TableHeader className="border-b-2 border-muted dark:border-background uppercase">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="max-sm:px-1" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="border-b-2 border-muted  dark:border-background hover:bg-muted/50 dark:hover:bg-background/20  dark:data-[state=selected]:bg-background/40"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="max-sm:px-1" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={coinColumns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2 [&>button]:dark:bg-slate-900  [&>button]:bg-white">
          <Button
            variant="outline"
            className="dark:hover:bg-slate-900/20"
            size="sm"
            onClick={getPrevPage}
            disabled={page <= 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            className="dark:hover:bg-slate-900/20"
            size="sm"
            onClick={getNextPage}
            disabled={totalPages < page}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
export const CoinTable = () => (
  <CoinListProvider>
    <CoinTableUI />
  </CoinListProvider>
)
