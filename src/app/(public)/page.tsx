/* eslint-disable @next/next/no-img-element */
'use client'
import { CoinTable } from '@/widget/coin-table'
import { TopMoversSlider } from '@/features/top-movers-slider'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import React from 'react'
import { coinsServices } from '@/entities/coins-list'

const Home: NextPage<{
  searchParams: {
    page: string
    limit: string
  }
}> = ({ searchParams: { limit, page } }) => {
  const { data: coins, isLoading } = useQuery({
    queryKey: ['topMovers'],
    queryFn: () => coinsServices.topMovers({ depth: 10 }),
  })

  return (
    <div>
      <section className="my-5">
        <h3 className="text-lg font-semibold">Top Movers</h3>
        {!!coins && (
          <TopMoversSlider
            isLoading={isLoading}
            coinList={coins}
            currency="USD"
          />
        )}
      </section>
      <CoinTable isLoading={isLoading} limit={50} data={coins} />
    </div>
  )
}
export default Home
