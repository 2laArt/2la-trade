'use client'
import { CoinTable } from '@/widget/coin-table'
import { TopMoversSlider } from '@/features/top-movers-slider'
import { NextPage } from 'next'
import React from 'react'
import { useQueryCoinsPage, useQueryTopMovers } from '@/entities/coins-list'

const Home: NextPage<{
  searchParams: {
    page: string
    limit: string
  }
}> = ({ searchParams: { page } }) => {
  const curPage = Number(page || '1')
  const { data: movers, isLoading: isMovers } = useQueryTopMovers({ depth: 10 })
  const { data: coins, isLoading } = useQueryCoinsPage({
    limit: 50,
    page: curPage,
  })
  return (
    <div>
      <section className="my-5">
        <h3 className="text-lg font-semibold">Top Movers</h3>
        {
          <TopMoversSlider
            isLoading={isMovers}
            coinList={movers}
            currency="USD"
          />
        }
      </section>
      <CoinTable
        isLoading={isLoading}
        limit={50}
        data={coins?.data}
        total={coins?.total}
      />
    </div>
  )
}
export default Home
