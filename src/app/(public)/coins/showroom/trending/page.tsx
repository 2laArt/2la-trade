import { coinsServices } from '@/entities/coins-list/model'
import { CoinTable } from '@/widget/coin-table'
import { type NextPage } from 'next'

const queryParams = {
  limit: 20,
}

const RecentlyAdded: NextPage = async () => {
  const data = await coinsServices.trending(queryParams)
  return (
    <div>
      <CoinTable
        isLoading={!data}
        data={data}
        total={data?.length}
        limit={10}
        title="Top Losers"
      />
    </div>
  )
}
export default RecentlyAdded
