import { type ITopMovers } from '@/entities/coin'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import React from 'react'

const data: ITopMovers[] = Array.from({ length: 10 })
export const useCoinTableSkeleton = ({
  columns,
}: {
  columns: ColumnDef<Partial<ITopMovers>>[]
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const getColVariant = (idx: number) => {
    const colVariants = {
      0: <div className="skeleton w-8 h-8 rounded-full my-4"></div>,
      1: (
        <div className="flex items-center gap-3">
          <div className="skeleton w-8 h-8 rounded-full"></div>
          <div className="skeleton w-2/4 h-6 rounded-full"></div>
        </div>
      ),
      default: <div className="skeleton min-w-6 w-3/4 h-6 rounded-full"></div>,
    }
    const key = idx as keyof typeof colVariants
    return colVariants[key] ?? colVariants.default
  }
  const columnsSkeleton = columns.map((column, idx) => ({
    ...column,
    cell: () => getColVariant(idx),
  }))
  const table = useReactTable({
    data,
    columns: columnsSkeleton,
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
  return table
}
