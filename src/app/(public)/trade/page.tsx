import { type NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
const Trade: NextPage = async () => {
  return (
    <div className="text-center text-3xl font-semibold">
      <div className="mb-8">The page is under development, come back later</div>
      <Image
        src={'/images/feature.png'}
        alt="feature"
        width={500}
        height={250}
        className="mx-auto"
      />
    </div>
  )
}
export default Trade
