import { Each, TableHead, TableHeader, TableRow } from '@/shared/ui'
import { HeaderGroup, flexRender } from '@tanstack/react-table'
import React from 'react'

export const TableSectionHeader = <R extends Object>({
  headerRows,
}: {
  headerRows: HeaderGroup<R>[]
}) => {
  return (
    <TableHeader className="border-b-2 border-muted dark:border-background uppercase">
      {headerRows.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          <Each
            arr={headerGroup.headers}
            render={(item) => (
              <TableHead className="max-sm:px-1" key={item.id}>
                {item.isPlaceholder
                  ? null
                  : flexRender(item.column.columnDef.header, item.getContext())}
              </TableHead>
            )}
          />
        </TableRow>
      ))}
    </TableHeader>
  )
}
