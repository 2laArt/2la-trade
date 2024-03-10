import { formatPercentage, priceWithSuffix } from '@/shared/lib'
import React from 'react'
import { coinsServices } from '@/entities/coins-list/model'
import { Percentage } from '@/shared/ui/percentage'
import { SmallChart } from '@/features/small-chart'
import { NextPage } from 'next'
import { ShowroomLinks } from '@/features/nav-menu'
const layout: NextPage<{
  children: React.ReactNode
}> = async ({ children }) => {
  const { market_cap, market_cap_change_rate, samples } =
    await coinsServices.showroom()
  const marketCapPrices = samples.map((i) => i.market_cap)
  const marketCap = priceWithSuffix(market_cap, '$')
  const changeRate = formatPercentage(market_cap_change_rate)
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-semibold text-2xl ">Showroom</h1>
          <div className="[&>p]:my-4 [&>p]:text-sm dark:text-slate-400 text-slate-800">
            <p>
              Showroom lists the most relevant tokens in the market today. The
              ranking is based on user behaviour and price data.
            </p>
            <p>
              The total crypto market cap is USD {marketCap} ({changeRate} above
              yesterday)
            </p>
          </div>
        </div>
        <div className="dark:bg-slate-900 flex justify-between items-center p-6 bg-white">
          <div className="flex flex-col">
            <div className="text-xs dark:text-slate-400 text-slate-800">
              Market Cap
            </div>
            <div className="my-3 text-xl font-semibold">{marketCap}</div>
            <Percentage percent={market_cap_change_rate} />
          </div>
          <div>
            <SmallChart
              percent={market_cap_change_rate}
              prices={marketCapPrices}
              className="w-52 h-20"
            />
          </div>
        </div>
      </div>
      <div className="sticky bg-background top-[73px] pl-0 p-5 my-7 z-10">
        <ShowroomLinks />
      </div>

      {children}
    </div>
  )
}
export default layout
