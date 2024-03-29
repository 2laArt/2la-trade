import { ITopMoversParams, coinsServices } from '@/entities/coins-list/model'
import { CoinTable } from '@/widget/coin-table'
import { NextPage } from 'next'
const queryParams: ITopMoversParams = { depth: 20, direction: -1 }

const TopGainers: NextPage = async () => {
  const data = await coinsServices.topMovers(queryParams)
  return (
    <div>
      <CoinTable
        isLoading={!data}
        data={data}
        total={data?.length}
        limit={10}
        title="Top Gainers"
      />
    </div>
  )
}

export default TopGainers
