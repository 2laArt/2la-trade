import React from 'react'
import { useCustomSearchParams } from '@/shared/lib/hooks'

export const useTablePagination = <R extends Object>({
  data,
  limit,
  total = 0,
}: {
  data?: R[]
  limit: number
  total?: number
}) => {
  const { setSearchParams, getSearchParam } = useCustomSearchParams()
  const page = Number(getSearchParam('page')) || 1
  const [pageData, setPageData] = React.useState<R[]>()
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
      setPageData(data)
      return
    }
    setPageData(data.slice(Math.abs(page - 1) * limit, limit * page))
  }, [page, data, limit, total])

  return { pageData, page, setNextPage, setPrevPage, totalPages }
}
