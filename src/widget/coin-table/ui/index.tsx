'use client'
import { Each, Table, TableHead, TableHeader, TableRow } from '@/shared/ui'
import { flexRender } from '@tanstack/react-table'
import React from 'react'
import { coinColumns } from './columns'
import { SelectDisplayColumn } from './select-display-column'
import { CoinsTableFooter } from './footer'
import { IFiltersCoins } from '@/entities/coin'
import { CoinTableBody } from './body-rows'
import { useMediaQuery } from 'react-responsive'
import { useLoadTable, useTableCondition } from '../lib'

interface ICoinTable {
  coinsPage?: IFiltersCoins
  limit: number
  page: number
  isLoading: boolean
  setPage: React.Dispatch<React.SetStateAction<number>>
}
export const CoinTable: React.FC<ICoinTable> = ({
  coinsPage,
  limit,
  page,
  isLoading,
  setPage,
}) => {
  const table = useTableCondition({
    isLoading,
    columns: coinColumns,
    data: coinsPage?.data,
  })
  const totalPages = coinsPage?.total ?? 1 / limit
  const selectedRow = table.getFilteredSelectedRowModel().rows.length
  const allRows = table.getFilteredRowModel().rows.length
  const headerRows = table.getHeaderGroups()
  const bodyRows = table.getRowModel().rows
  const columnsList = React.useMemo(
    () => table.getAllColumns().filter((column) => column.getCanHide()),
    [table]
  )
  const isLoadTable = useLoadTable(columnsList)

  React.useEffect(() => {
    console.log('table render')
  })
  return (
    <div className="w-full">
      {isLoadTable && (
        <>
          <SelectDisplayColumn columns={columnsList} />
          <div>
            <Table className="dark:bg-slate-900 max-sm:text-xs bg-white font-medium">
              <TableHeader className="border-b-2 border-muted dark:border-background uppercase">
                {headerRows.map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    <Each
                      arr={headerGroup.headers}
                      render={(item) => (
                        <TableHead className="max-sm:px-1" key={item.id}>
                          {item.isPlaceholder
                            ? null
                            : flexRender(
                                item.column.columnDef.header,
                                item.getContext()
                              )}
                        </TableHead>
                      )}
                    />
                  </TableRow>
                ))}
              </TableHeader>
              <CoinTableBody
                rows={bodyRows}
                columnsCount={coinColumns.length}
              />
            </Table>
          </div>
          <CoinsTableFooter
            allRows={allRows}
            page={page}
            setPage={setPage}
            selectedRows={selectedRow}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  )
}
