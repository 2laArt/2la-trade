import { ICoin } from '@/entities/coin'
import { Each, TableBody, TableCell, TableRow } from '@/shared/ui'
import { Row, flexRender } from '@tanstack/react-table'
import React from 'react'

export const CoinTableBody: React.FC<{ rows: Row<ICoin>[] }> = ({ rows }) => {
  return (
    <TableBody>
      <Each
        arr={rows}
        render={(row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
            className="border-b-2 border-muted  dark:border-background hover:bg-muted/50 dark:hover:bg-background/20  dark:data-[state=selected]:bg-background/40"
          >
            <Each
              arr={row.getAllCells()}
              render={(cell) => (
                <TableCell className="max-sm:px-1" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              )}
            />
          </TableRow>
        )}
      />
    </TableBody>
  )
}
