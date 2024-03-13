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
    className={cn('uppercase text-center px-2 max-md:p-1 z-[2]', className)}
    onClick={() => column.toggleSorting()}
  >
    {text}
    <CaretSortIcon className="ml-2 h-4 w-4" />
  </Button>
)
// onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
