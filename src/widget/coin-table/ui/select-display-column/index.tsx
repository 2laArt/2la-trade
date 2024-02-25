import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/shared/ui'
import { ChevronDownIcon } from 'lucide-react'
import React from 'react'
import { Table } from '@tanstack/react-table'
import { useMediaQuery } from 'react-responsive'
import { type ICoin } from '@/entities/coin'
export const SelectDisplayColumn: React.FC<{ table: Table<ICoin> }> = ({
  table,
}) => {
  const is1110 = useMediaQuery({
    query: '(max-width: 1110px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  })
  const columnsList = table
    .getAllColumns()
    .filter((column) => column.getCanHide())
  const columnsVisible = columnsList.filter((column) => column.getIsVisible())

  React.useEffect(() => {
    if (isMobile) {
      columnsList.map((column) =>
        column.id === 'price'
          ? column.toggleVisibility(true)
          : column.toggleVisibility(false)
      )
      return
    }
    if (is1110) {
      columnsList.map((column) => {
        if (column.id === 'chart' || column.id === 'market cap')
          return column.toggleVisibility(false)
        return column.toggleVisibility(true)
      })
      return
    }
    columnsList.map((column) => column.toggleVisibility(true))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, is1110])
  return (
    <div className="flex items-center py-4">
      <h3 className="text-lg font-semibold"> Today is Cryptocurrency Prices</h3>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="ml-auto dark:bg-slate-900  bg-white"
          >
            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-slate-900 bg-white" align="end">
          {columnsList.map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
