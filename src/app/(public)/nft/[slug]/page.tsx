import { type NftBlockchainType, nftServices } from '@/entities/nft/model'
import { NftImagesSection } from '@/entities/nft/ui/nft-images-section'
import { MarketPriceCard } from '@/features/market-price-card'
import { priceWithSuffix } from '@/shared/lib'
import { DiscordLogoIcon, GlobeIcon, ReaderIcon } from '@radix-ui/react-icons'
import { type NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const NftBySlug: NextPage<{
  params: { slug: string }
  searchParams: { blockchain?: NftBlockchainType }
}> = async ({ params: { slug }, searchParams: { blockchain } }) => {
  const symbol = '$'
  const socialInform = await nftServices.socialInform({
    slug,
    blockchain: blockchain,
  })
  const sales = await nftServices.sales({
    slug,
    blockchain: blockchain,
  })

  const getPercents = (arr?: number[]) =>
    !!arr ? (arr[arr.length - 1] - arr[0]) / arr[0] : 0

  const isGeneral: boolean =
    !!socialInform?.website ||
    !!socialInform?.market_url ||
    !!socialInform?.discord_url
  const isSales: boolean =
    !!sales?.marketCaps?.length ||
    !!sales?.volumes?.length ||
    !!sales?.sales?.length ||
    !!sales?.averagePrices?.length

  const salesCards = [
    !!sales.averagePrices.length && {
      title: 'Average Price (7D)',
      percent: getPercents(sales.averagePrices),
      prices: sales.averagePrices,
      cap: priceWithSuffix(sales.average_price, symbol),
    },
    !!sales.sales.length && {
      title: 'Sales (7D)',
      percent: getPercents(sales.sales),
      prices: sales.sales,
      cap: sales.sale ? `${sales.sale}` : 'N/A',
    },
    !!sales.marketCaps.length && {
      title: 'Market Cap (7D)',
      percent: getPercents(sales.marketCaps),
      prices: sales.marketCaps,
      cap: priceWithSuffix(sales.market_cap, symbol),
    },
    !!sales.volumes.length && {
      title: 'Volume (7D)',
      percent: getPercents(sales.volumes),
      prices: sales.volumes,
      cap: priceWithSuffix(sales.volume, symbol),
    },
  ]

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-6">{socialInform.name}</h1>
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className=" flex flex-col gap-4 ">
          <NftImagesSection images={socialInform.detail_images} />
          {isSales && (
            <div className="card p-6">
              <h6 className="font-semibold text-xl mb-6">Sales Data </h6>
              <div className="grid  md:grid-cols-2 gap-4 ">
                {salesCards.map(
                  (card) =>
                    !!card && (
                      <MarketPriceCard
                        key={card.title}
                        marketCap={card.cap}
                        prices={card.prices}
                        percent={card.percent}
                        title={card.title}
                        chartClassName="xl:w-52 lg:w-32 max-[450px]:w-32"
                        className="dark:bg-slate-800 bg-gray-100"
                      />
                    )
                )}
              </div>
            </div>
          )}
        </div>
        <div className=" flex flex-col gap-4 ">
          {!!socialInform.description && (
            <div className="card p-6">
              <h6 className="font-semibold text-xl mb-6">About </h6>
              <p>{socialInform.description}</p>
            </div>
          )}
          {isGeneral && (
            <div className="card p-6">
              <h6 className="font-semibold text-xl mb-6">
                General Information{' '}
              </h6>
              <div className="flex flex-col gap-6">
                {socialInform.website && (
                  <Link
                    href={socialInform.website}
                    target="_blank"
                    className="flex gap-3 items-center text-blue-600"
                  >
                    <GlobeIcon width={25} height={25} />
                    Website
                  </Link>
                )}
                {socialInform.market_url && (
                  <Link
                    href={socialInform.market_url}
                    target="_blank"
                    className="flex gap-3 items-center text-blue-600"
                  >
                    <ReaderIcon width={25} height={25} />
                    Marketplace
                  </Link>
                )}
                {socialInform.discord_url && (
                  <Link
                    href={socialInform.discord_url}
                    target="_blank"
                    className="flex gap-3 items-center text-blue-600"
                  >
                    <DiscordLogoIcon width={25} height={25} />
                    Discord
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NftBySlug
