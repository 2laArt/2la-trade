import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface ISearchParam {
  key: string
  value: string
}
export const useCustomSearchParams = (scroll?: boolean) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const getSearchParam = React.useCallback(
    (key: string) => searchParams.get(key),
    [searchParams]
  )

  const createQueryString = React.useCallback(
    (newParams: ISearchParam[]) => {
      const params = new URLSearchParams(searchParams.toString())
      newParams.forEach(({ key, value }) => params.set(key, value))
      return params.toString()
    },
    [searchParams]
  )

  const setSearchParams = React.useCallback(
    (newParams: ISearchParam[]) => {
      const params = createQueryString(newParams)
      router.push(`${pathname}?${params}`, { scroll })
    },
    [createQueryString, pathname, router, scroll]
  )

  return { setSearchParams, getSearchParam }
}
