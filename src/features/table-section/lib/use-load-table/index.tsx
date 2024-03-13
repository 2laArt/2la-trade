import { Column } from '@tanstack/react-table'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const useLoadTable = <R extends Object>({
  columns,
  laptopCols,
  mobileCols,
}: {
  columns: Column<R, unknown>[]
  mobileCols?: string[]
  laptopCols?: string[]
}) => {
  const is1110 = useMediaQuery({
    query: '(max-width: 1110px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  })
  const [isLoadingTable, setLoadingTable] = React.useState<boolean>(true)
  React.useEffect(() => {
    if (isLoadingTable) setLoadingTable(false)
    if (isMobile && mobileCols) {
      columns.forEach((column) =>
        mobileCols.some((i) => i === column.id)
          ? column.toggleVisibility(true)
          : column.toggleVisibility(false)
      )
      return
    }
    if (is1110 && laptopCols) {
      columns.forEach((column) => {
        laptopCols.some((i) => i === column.id)
          ? column.toggleVisibility(false)
          : column.toggleVisibility(true)
      })
      return
    }
    columns.map((column) => column.toggleVisibility(true))
  }, [isMobile, is1110, columns, isLoadingTable, mobileCols, laptopCols])

  return isLoadingTable
}
