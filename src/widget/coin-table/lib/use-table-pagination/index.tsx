import { ITopMovers } from '@/entities/coin'
import React from 'react'
import { useTableSearchParams } from '../use-table-search-params'

export const useTablePagination = ({
  data,
  limit,
  total = 0,
}: {
  data?: Partial<ITopMovers>[]
  limit: number
  total?: number
}) => {
  const { setSearchParams, page } = useTableSearchParams()
  const [coins, setCoins] = React.useState<Partial<ITopMovers>[]>()
  const totalPages = total / limit

  const setPrevPage = () => {
    if (!(page > 1)) return
    setSearchParams([{ name: 'page', value: `${page - 1}` }])
  }
  const setNextPage = () => {
    if (!(totalPages > page)) return
    setSearchParams([{ name: 'page', value: `${page + 1}` }])
  }

  React.useEffect(() => {
    if (!data) return

    if (data.length <= limit) {
      setCoins(data)
      return
    }
    setCoins(data.slice(Math.abs(page - 1) * limit, limit * page))
  }, [page, data, limit, total])

  return { coins, page, setNextPage, setPrevPage, totalPages }
}
