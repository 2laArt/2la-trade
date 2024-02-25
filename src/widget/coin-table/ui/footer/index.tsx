import { Button } from '@/shared/ui'
import React from 'react'

interface ICoinsTableFooter {
  selectedRows: number
  allRows: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
  totalPages: number
}
export const CoinsTableFooter: React.FC<ICoinsTableFooter> = ({
  allRows,
  page,
  selectedRows,
  setPage,
  totalPages,
}) => {
  const setPrev = () => !!(page > 1) && setPage((prev) => --prev)

  const setNext = () => !!(totalPages > page) && setPage((prev) => ++prev)

  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <div className="flex-1 text-sm text-muted-foreground">
        {selectedRows} of {allRows} row(s) selected.
      </div>
      <div className="space-x-2 [&>button]:dark:bg-slate-900  [&>button]:bg-white">
        <Button
          variant="outline"
          className="dark:hover:bg-slate-900/20"
          size="sm"
          onClick={setPrev}
          disabled={page <= 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          className="dark:hover:bg-slate-900/20"
          size="sm"
          onClick={setNext}
          disabled={totalPages < page}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
