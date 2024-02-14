/* eslint-disable @next/next/no-img-element */

import { CoinTable } from '@/widget/coin-table'
import { NextPage } from 'next'

const Home: NextPage<{
  searchParams: {
    page: string
    limit: string
  }
}> = async ({ searchParams: { limit, page } }) => {
  return (
    <div>
      <CoinTable />
    </div>
  )
}
export default Home
