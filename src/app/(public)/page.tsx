/* eslint-disable @next/next/no-img-element */
'use client'
import { cryptoServices } from '@/shared/api'
import { CoinTable } from '@/widget/coin-table'
import { TopMoversSlider } from '@/widget/top-movers-slider'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import React from 'react'

const Home: NextPage<{
  searchParams: {
    page: string
    limit: string
  }
}> = ({ searchParams: { limit, page } }) => {
  const { data: coins } = useQuery({
    queryKey: ['topMovers'],
    queryFn: () => cryptoServices.getTopMovers(10),
  })

  return (
    <div>
      <section className="my-5">
        <h3 className="text-lg font-semibold">Top Movers</h3>
        {!!coins && <TopMoversSlider coinList={coins} currency="USD" />}
      </section>
      <CoinTable />
    </div>
  )
}
export default Home
