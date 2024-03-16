import { nftServices } from '@/entities/nft/model'
import { SectionIntro } from '@/shared/ui/section-intro'
import { IntroSectionNftCollection } from '@/widget/intro-section-nft-collection'
import { NftTable } from '@/widget/nft-table'
import { type NextPage } from 'next'
import React from 'react'

const NftEthereum: NextPage<{
  searchParams: {
    page: string
    limit: string
  }
}> = async ({ searchParams: { page: pageUrl } }) => {
  const page = Number(pageUrl) || 1
  const limit = 10
  const blockchain = 0
  const symbol = 'ETH'
  const { data, total } = await nftServices.collections({
    blockchain,
    limit,
    page,
  })

  return (
    <div>
      <div>
        <SectionIntro title="Ethereum NFT">
          <p>
            Ethereum NFT Collections shows the name, sales and volume of the top
            NFTs on the Ethereum blockchain.
          </p>
          <p>
            Discover the top NFT collections on the Ethereum blockchain. View
            the collection value, floor price, 7-day transaction volume, and
            more.
          </p>
        </SectionIntro>
      </div>
      <IntroSectionNftCollection blockchain={blockchain} />
      <NftTable
        symbol={symbol}
        isLoading={false}
        limit={limit}
        data={data}
        title="Ethereum Blockchain NFT"
        total={total}
      />
    </div>
  )
}

export default NftEthereum
