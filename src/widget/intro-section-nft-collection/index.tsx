import { NftBlockchainType, nftServices } from '@/entities/nft/model'
import { IntroImageNftCard } from '@/entities/nft/ui'
import { MarketPriceCard } from '@/features/market-price-card'
import { priceWithSuffix } from '@/shared/lib'
import React from 'react'

export const IntroSectionNftCollection: React.FC<{
  blockchain: NftBlockchainType
  warnMark?: boolean
}> = async ({ blockchain, warnMark }) => {
  const statistic = await nftServices.statistic({ blockchain })
  const [collectionTrending] = await nftServices.collectionTrending({
    blockchain,
  })

  const imgCollection =
    collectionTrending.detail_images[0] || '/images/logo.png'

  const marketPrice = priceWithSuffix(statistic.average_price_7d, '$')
  const marketVolume = priceWithSuffix(statistic.volume_7d, '$')

  return (
    <div className="grid gap-4 grid-cols-2 max-[870px]:grid-cols-1 my-10 ">
      <div className="flex max-sm:flex-col max-[870px]:flex-row max-[870px]:justify-between flex-col gap-4">
        <MarketPriceCard
          marketCap={marketVolume}
          percent={statistic.volume_7d_rate}
          prices={statistic.volumes}
          title="NFT Sales Volume (7D)"
          className={
            'max-[870px]:p-6 max-[870px]:w-1/2 max-sm:w-full max-xl:p-2 max-lg:py-0'
          }
          chartClassName={'max-md:w-40 max-md:h-16 max-sm:w-52 max-sm:h-20'}
        />
        <MarketPriceCard
          marketCap={marketPrice}
          percent={statistic.average_price_7d_rate}
          prices={statistic.prices}
          title="Average Price (7D)"
          className={
            'max-[870px]:p-6 max-[870px]:w-1/2 max-sm:w-full max-xl:p-2 max-lg:py-0'
          }
          chartClassName={'max-md:w-40 max-md:h-16 max-sm:w-52 max-sm:h-20'}
        />
      </div>
      <div className="relative max-[870px]:flex">
        <IntroImageNftCard
          image={collectionTrending.image_url}
          name={collectionTrending.name}
          title="Trending"
          className="min-[870px]:left-0 max-[870px]:mr-4"
          warnMark={warnMark}
        />
        <IntroImageNftCard
          image={imgCollection}
          name={collectionTrending.twitter_username}
          title="Subscribe to Twitter"
          className="min-[870px]:right-0"
          warnMark={warnMark}
        />
      </div>
    </div>
  )
}
