import {
  coinsServices,
  type IFiltersCoinsParams,
} from '@/entities/coins-list/model'
import { CoinTable } from '@/widget/coin-table'
import { type NextPage } from 'next'

const queryParams: IFiltersCoinsParams = {
  limit: 30,
  page: 1,
  sort: 'rank',
  direction: 'DESC',
}

const RecentlyAdded: NextPage = async () => {
  const { data } = await coinsServices.filters(queryParams)
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
