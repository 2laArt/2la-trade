import { type ITopMovers } from '@/entities/coins-list'
import { paths } from '@/shared/routing'
import { Each, TableBody, TableCell, TableRow } from '@/shared/ui'
import { Row, flexRender } from '@tanstack/react-table'
import Link from 'next/link'
import React from 'react'

export const CoinTableBody: React.FC<{
  rows: Row<Partial<ITopMovers>>[]
  columnsCount: number
}> = ({ rows, columnsCount }) => {
  const getHref = (slug: string) => paths.coinSlug(slug)
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
                  <TableCell className="max-sm:px-1 text-center" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                )}
              />
              <TableCell className="absolute top-0 left-0 block w-full h-full">
                <Link
                  href={getHref(row.original?.slug ?? 'bitcoin')}
                  className="absolute top-0 left-0 block w-full h-full z-[1]"
                />
              </TableCell>
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
