import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/shared/ui'
import { ChevronDownIcon } from 'lucide-react'
import React from 'react'
import { Column } from '@tanstack/react-table'
import { type ITopMovers } from '@/entities/coin'
export const SelectDisplayColumn: React.FC<{
  columns: Column<ITopMovers, unknown>[]
}> = ({ columns }) => {
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
          {columns.map((column) => {
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
