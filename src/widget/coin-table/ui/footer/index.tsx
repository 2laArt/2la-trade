import { Button } from '@/shared/ui'
import React from 'react'

interface ICoinsTableFooter {
  selectedRows: number
  allRows: number
  setNextPage: VoidFunction
  setPrevPage: VoidFunction
  page: number
  totalPages: number
}
export const CoinsTableFooter: React.FC<ICoinsTableFooter> = ({
  allRows,
  page,
  selectedRows,
  totalPages,
  setNextPage,
  setPrevPage,
}) => {
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
          onClick={setPrevPage}
          disabled={page <= 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          className="dark:hover:bg-slate-900/20"
          size="sm"
          onClick={setNextPage}
          disabled={totalPages <= page}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
