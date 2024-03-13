import { Table } from '@/shared/ui'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { SelectDisplayColumn } from './select-display-column'
import { TableFooter } from './table-footer'
import { TableRowLinkType, TableSectionBody } from './table-section-body'
import { useLoadTable, useTablePagination, useCreateTable } from '../lib'
import { TableSectionHeader } from './table-section-header'
import { TableSkeleton } from './table-skeleton'

export interface ITableSectionExternal<R extends Object> {
  data?: R[]
  total?: number
  limit: number
  isLoading: boolean
  title?: string
}
export interface ITableSectionInternal<R extends Object> {
  columns: ColumnDef<R>[]
  laptopCols?: string[]
  mobileCols?: string[]
  TableRowLink?: TableRowLinkType<R>
}
export interface ITableSection<R extends Object>
  extends ITableSectionExternal<R>,
    ITableSectionInternal<R> {}

export const TableSection = <R extends Object>({
  data,
  columns,
  total,
  limit,
  isLoading,
  title,
  laptopCols,
  mobileCols,
  TableRowLink,
}: ITableSection<R>): React.ReactElement => {
  const [emptyArr] = React.useState([])
  const { setNextPage, setPrevPage, pageData, page, totalPages } =
    useTablePagination({
      limit,
      total,
      data,
    })

  const table = useCreateTable({
    columns,
    data: pageData || emptyArr,
  })
  const selectedRow = table.getFilteredSelectedRowModel().rows.length
  const allRows = table.getFilteredRowModel().rows.length
  const headerRows = table.getHeaderGroups()
  const bodyRows = table.getRowModel().rows
  const columnsList = React.useMemo(
    () => table.getAllColumns().filter((column) => column.getCanHide()),
    [table]
  )
  const isLoadingTable = useLoadTable({
    columns: columnsList,
    laptopCols,
    mobileCols,
  })

  React.useEffect(() => {
    console.log('table render')
  })

  return (
    <div className="w-full mt-10">
      {isLoadingTable || isLoading ? (
        <TableSkeleton />
      ) : (
        <>
          <SelectDisplayColumn columns={columnsList} title={title} />
          <div>
            <Table className="dark:bg-slate-900 max-sm:text-xs bg-white font-medium">
              <TableSectionHeader headerRows={headerRows} />
              <TableSectionBody
                rows={bodyRows}
                columnsCount={columns.length}
                TableRowLink={TableRowLink}
              />
            </Table>
          </div>
          <TableFooter
            allRows={allRows}
            setNextPage={setNextPage}
            setPrevPage={setPrevPage}
            page={page}
            selectedRows={selectedRow}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  )
}
