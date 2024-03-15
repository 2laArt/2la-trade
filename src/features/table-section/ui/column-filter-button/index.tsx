import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { Column } from '@tanstack/react-table'
import React from 'react'

export const ColumnFilterButton = <R extends Object>({
  column,
  text,
  className,
}: {
  column: Column<R>
  text: string
  className?: string
}): React.ReactElement => (
  <Button
    variant="ghost"
    className={cn(
      'uppercase text-center px-2 max-md:p-1 z-[2] max-sm:text-xs ',
      className
    )}
    onClick={() => column.toggleSorting()}
  >
    <span className="inline-block truncate max-sm:max-w-24">{text}</span>
    <CaretSortIcon className="ml-2 h-4 w-4  max-sm:m-0" />
  </Button>
)
// onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
