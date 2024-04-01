import { formatPercentage, priceWithSuffix } from '@/shared/lib'
import React from 'react'
import { coinsServices } from '@/entities/coins-list/model'
import { coinLinks } from '@/features/nav-menu/config/data'
import { NavThroughSection } from '@/features/nav-menu/ui/nav-through-section'
import { SectionIntro } from '@/shared/ui/section-intro'
import { MarketPriceCard } from '@/features/market-price-card'
import { NextPage } from 'next'
const Intro: NextPage<{ children: React.ReactNode }> = async ({ children }) => {
  const { market_cap, market_cap_change_rate, samples } =
    await coinsServices.showroom()
  const marketCapPrices = samples.map((i) => i.market_cap)
  const marketCap = priceWithSuffix(market_cap, '$')
  const changeRate = formatPercentage(market_cap_change_rate)

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <SectionIntro title="Showroom">
          <p>
            Showroom lists the most relevant tokens in the market today. The
            ranking is based on user behaviour and price data.
          </p>
          <p>
            The total crypto market cap is USD {marketCap} ({changeRate} above
            yesterday)
          </p>
        </SectionIntro>

        <MarketPriceCard
          marketCap={marketCap}
          title="Market Cap"
          prices={marketCapPrices}
          percent={market_cap_change_rate}
        />
      </div>
      <div className="sticky top-[73px] my-7 z-10">
        <NavThroughSection links={coinLinks} />
      </div>
      {children}
    </div>
  )
}

export default Intro
