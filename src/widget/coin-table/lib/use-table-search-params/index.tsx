import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface ISearchParam {
  name: string
  value: string
}
export const useTableSearchParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page')) || 1

  const createQueryString = React.useCallback(
    (newParams: ISearchParam[]) => {
      const params = new URLSearchParams(searchParams.toString())
      newParams.forEach(({ name, value }) => params.set(name, value))
      return params.toString()
    },
    [searchParams]
  )

  const setSearchParams = React.useCallback(
    (newParams: ISearchParam[]) => {
      const params = createQueryString(newParams)
      router.push(`${pathname}?${params}`)
    },
    [createQueryString, pathname, router]
  )

  return { setSearchParams, page }
}
