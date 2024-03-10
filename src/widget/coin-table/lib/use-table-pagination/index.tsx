import { ITopMovers } from '@/entities/coins-list'
import React from 'react'
import { useCustomSearchParams } from '@/shared/lib/hooks'

export const useTablePagination = ({
  data,
  limit,
  total = 0,
}: {
  data?: Partial<ITopMovers>[]
  limit: number
  total?: number
}) => {
  const { setSearchParams, getSearchParam } = useCustomSearchParams()
  const page = Number(getSearchParam('page')) || 1
  const [coins, setCoins] = React.useState<Partial<ITopMovers>[]>()
  const totalPages = total / limit

  const setPrevPage = () => {
    if (!(page > 1)) return
    setSearchParams([{ key: 'page', value: `${page - 1}` }])
  }
  const setNextPage = () => {
    if (!(totalPages > page)) return
    setSearchParams([{ key: 'page', value: `${page + 1}` }])
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
