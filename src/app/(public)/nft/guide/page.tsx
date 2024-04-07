import { type NextPage } from 'next'
import React from 'react'
import { nftInfo, nftGuide } from './data'
import { Check } from 'lucide-react'

const NftGuide: NextPage = () => {
  return (
    <div className="lg:w-4/5 mx-auto">
      <h2 className="md:text-3xl text-2xl mb-5 font-semibold">
        General Information
      </h2>
      <ul className="flex flex-col gap-4">
        {nftInfo.map((item) => (
          <li key={item.title} className="card p-3 md:w-4/5 even:ml-auto">
            <h6 className="mb-3 font-medium">{item.title}</h6>
            <p className="border-l-2 border-gray-300 dark:border-gray-600 pl-2 text-sm">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
      <h2 className="md:text-3xl text-2xl mt-8 mb-5 font-semibold">
        NFT strategy
      </h2>
      <ul className="card flex flex-col gap-4">
        {nftGuide.map((item, idx) => (
          <li key={idx} className="text-sm p-3 flex gap-1">
            <span className="inline-block mt-[2px] text-green-500">
              <Check size={20} />
            </span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NftGuide
