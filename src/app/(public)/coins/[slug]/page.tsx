'use client'
import {
  ChartPeriodType,
  useQueryCoinBySlug,
  useQueryCoinMetaData,
} from '@/entities/coin/model'
import { AboutCoin, CoinStatistics, CoinTags } from '@/entities/coin/ui'
import { ListCapitalizations } from '@/entities/coin/ui'
import { cn, formatPercentage, formatToCurrency } from '@/shared/lib'
import { TokenIcon } from '@/shared/ui'
import CoinChart from '@/widget/chart'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'

// const CoinChart = dynamic(() => import('@/widget/chart'), { ssr: false })
const CoinBySlug: NextPage<{
  params: { slug: string }
  searchParams: { period?: ChartPeriodType }
}> = ({ params: { slug }, searchParams: { period } }) => {
  const {
    data: coin,
    isLoading: isLoadCoin,
    isError: isErrorCoin,
  } = useQueryCoinBySlug(slug)
  const { data: coinMeta, isLoading: isLoadMeta } = useQueryCoinMetaData(slug)
  const isData = !!coin && !!coinMeta
  const currency = 'USD'
  const prefix = '$'
  return (
    <article>
      {!!coinMeta ? (
        <h1 className="capitalize mb-9 text-xl flex items-center font-semibold">
          <TokenIcon
            slug={coinMeta.slug}
            symbol={coinMeta?.symbol}
            token_id={coinMeta?.id}
          />
          <div className="ml-2">
            {coinMeta.name}{' '}
            <span className="text-base text-gray-500"> {coinMeta.symbol}</span>
          </div>
        </h1>
      ) : (
        <div className="skeleton rounded-xl mb-9 w-48 h-10"></div>
      )}
      <div className="flex gap-5 ">
        <div className="card lg:w-2/3 p-6">
          {isData && (
            <div className="mb-10">
              <h4 className="mb-3 text-3xl font-medium">
                {prefix} {formatToCurrency(coin.usd_price, {})} {currency}
              </h4>
              <div>
                <span className="text-gray-500">
                  {coin.btc_price.toPrecision(3)} {coinMeta.symbol}
                </span>{' '}
                <span
                  className={cn(
                    'mx-2',
                    coin.btc_price_change_24h > 0
                      ? 'text-green-600'
                      : 'text-red-700'
                  )}
                >
                  {formatPercentage(coin.btc_price_change_24h)}
                </span>
                <span className="text-gray-500">(24h)</span>
              </div>
            </div>
          )}
          <CoinChart slug={slug} period={period} />
          {isData && (
            <ListCapitalizations
              cap={coin.usd_marketcap}
              max_supply={coin.max_supply}
              supply={coin.circulating_supply}
              total_supply={coin.total_supply}
              volume_24={coin.usd_volume_24h}
              symbol={coinMeta.symbol}
              currency={currency}
              prefix={prefix}
            />
          )}
          <AboutCoin
            name={coinMeta?.name}
            description={coinMeta?.description}
          />
        </div>
        <div className="flex flex-col gap-5 w-1/3">
          <CoinStatistics slug={slug} />
          {coinMeta && <CoinTags tags={coinMeta.tags} count={20} />}
        </div>
      </div>
    </article>
  )
}

export default CoinBySlug
