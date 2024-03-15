import { Each, TableBody, TableCell, TableRow } from '@/shared/ui'
import { Row, flexRender } from '@tanstack/react-table'
import React from 'react'

interface ITableSectionBody<R extends Object> {
  rows: Row<R>[]
  columnsCount: number
  TableRowLink?: TableRowLinkType<R>
}

export type TableRowLinkType<R extends Object> = React.FC<{ row: Row<R> }>

export const TableSectionBody = <R extends Object>({
  rows,
  columnsCount,
  TableRowLink,
}: ITableSectionBody<R>): React.ReactElement => {
  return (
    <TableBody>
      {!!rows.length ? (
        <Each
          arr={rows}
          render={(row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
              className="border-b-2 border-muted  dark:border-background hover:bg-muted/50 dark:hover:bg-background/20 relative dark:data-[state=selected]:bg-background/40"
            >
              <Each
                arr={row.getVisibleCells()}
                render={(cell) => (
                  <TableCell className="px-4 py-2 max-sm:px-1" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                )}
              />
              {TableRowLink && (
                <TableCell className="absolute top-0 left-0 block w-full h-full">
                  <TableRowLink row={row} />
                </TableCell>
              )}
            </TableRow>
          )}
        />
      ) : (
        <TableRow>
          <TableCell colSpan={columnsCount} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}
