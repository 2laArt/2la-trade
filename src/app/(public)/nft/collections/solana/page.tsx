import { type NextPage } from 'next'
import { SectionIntro } from '@/shared/ui/section-intro'
import React from 'react'
import { NftTableCollections } from '@/widget/nft-table'
import { nftServices } from '@/entities/nft/model'
import { IntroSectionNftCollection } from '@/widget/intro-section-nft-collection'

const NftSolana: NextPage<{
  searchParams: {
    page: string
    limit: string
  }
}> = async ({ searchParams: { page: pageUrl } }) => {
  const page = Number(pageUrl) || 1
  const limit = 10
  const blockchain = 2
  const symbol = 'SOL'
  const { data, total } = await nftServices.collections({
    blockchain: 2,
    limit,
    page,
  })

  return (
    <div>
      <div>
        <SectionIntro title="Solana NFTs">
          <p>
            Solana NFT Collections shows the name, sales and volume of the top
            NFTs on the Solana blockchain.
          </p>
          <p>
            Discover the top NFT collections on the Solana blockchain. View the
            collection value, floor price, 7-day transaction volume, and more.
          </p>
        </SectionIntro>
      </div>
      <IntroSectionNftCollection blockchain={blockchain} warnMark />
      <NftTableCollections
        symbol={symbol}
        isLoading={false}
        limit={limit}
        data={data}
        title="Solana blockchain NFT"
        total={total}
      />
    </div>
  )
}

export default NftSolana
