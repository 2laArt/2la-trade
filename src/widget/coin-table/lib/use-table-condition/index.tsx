import { ITopMovers } from '@/entities/coin'
import { ColumnDef } from '@tanstack/react-table'
import { useCoinTable, useCoinTableSkeleton } from '..'
import React from 'react'

const emptyArr: ITopMovers[] = []

export const useTableCondition = ({
  columns,
  isLoading,
  data,
}: {
  columns: ColumnDef<ITopMovers>[]
  data?: ITopMovers[]
  isLoading: boolean
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useTable = React.useCallback(
    isLoading ? useCoinTableSkeleton : useCoinTable,
    [isLoading]
  )

  const table = useTable({ columns, data: data ?? emptyArr })
  return table
}
