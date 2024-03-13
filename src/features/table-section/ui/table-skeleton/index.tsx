'use client'
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui'
import React from 'react'

export const TableSkeleton = (): React.ReactElement => {
  const [data] = React.useState<unknown[]>(Array.from({ length: 10 }))

  return (
    <div>
      <h5 className="mt-10 mb-4 text-xl flex gap-4 items-center">
        <span>Table Loading </span> <Spinner size={30} />
      </h5>
      <Table className="dark:bg-slate-900 max-sm:text-xs bg-white font-medium">
        <TableHeader className="border-b-2 border-muted dark:border-background uppercase">
          <TableRow>
            <TableHead>
              <div className="skeleton w-1/4 h-4 rounded-full my-3" />
            </TableHead>
            <TableHead>
              <div className="skeleton w-1/4 h-4 rounded-full my-3" />
            </TableHead>
            <TableHead>
              <div className="skeleton w-1/4 h-4 rounded-full my-3" />
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((_, idx) => (
            <TableRow
              className="border-b-2 border-muted  dark:border-background hover:bg-muted/50 dark:hover:bg-background/20 relative dark:data-[state=selected]:bg-background/40"
              key={idx}
            >
              <TableCell>
                <div className="skeleton min-w-6 w-3/4 h-4 rounded-full my-5" />
              </TableCell>
              <TableCell>
                <div className="skeleton min-w-6 w-3/4 h-4 rounded-full my-5" />
              </TableCell>
              <TableCell>
                <div className="skeleton min-w-6 w-3/4 h-4 rounded-full my-5" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
