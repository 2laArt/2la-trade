import { ITopMovers } from '@/entities/coin'
import { Column } from '@tanstack/react-table'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const useLoadTable = (
  columns: Column<Partial<ITopMovers>, unknown>[]
) => {
  const is1110 = useMediaQuery({
    query: '(max-width: 1110px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  })
  const [isLoadTable, setLoadTable] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!isLoadTable) setLoadTable(true)
    if (isMobile) {
      columns.map((column) =>
        column.id === 'price'
          ? column.toggleVisibility(true)
          : column.toggleVisibility(false)
      )
      return
    }
    if (is1110) {
      columns.map((column) => {
        if (column.id === 'chart' || column.id === 'market cap')
          return column.toggleVisibility(false)
        return column.toggleVisibility(true)
      })
      return
    }
    columns.map((column) => column.toggleVisibility(true))
  }, [isMobile, is1110, columns, isLoadTable])

  return isLoadTable
}
