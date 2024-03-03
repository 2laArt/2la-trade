import { type ITopMoversParams, coinServices } from '@/entities/coin/model'
import { CoinTable } from '@/widget/coin-table'
import { type NextPage } from 'next'
const queryParams: ITopMoversParams = { depth: 20, direction: 1 }

const TopLosers: NextPage = async () => {
  const data = await coinServices.topMovers(queryParams)
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
export default TopLosers
