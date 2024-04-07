import { type NextPage } from 'next'
import { SectionIntro } from '@/shared/ui/section-intro'
import React from 'react'
import { NftTableCollections } from '@/widget/nft-table'
import { nftServices } from '@/entities/nft/model'
import { IntroSectionNftCollection } from '@/widget/intro-section-nft-collection'

const NftPolygon: NextPage<{
  searchParams: {
    page: string
    limit: string
  }
}> = async ({ searchParams: { page: pageUrl } }) => {
  const page = Number(pageUrl) || 1
  const limit = 10
  const blockchain = 4
  const symbol = 'ETH'
  const { data, total } = await nftServices.collections({
    blockchain,
    limit,
    page,
  })

  return (
    <div>
      <div>
        <SectionIntro title="Polygon NFTs">
          <p>
            Polygon Chain NFT Collections shows the name, sales and volume of
            the top NFTs native to the Polygon blockchain.
          </p>
          <p>
            Discover the top NFT collections on the Polygon blockchain. View the
            collection value, floor price, 7-day transaction volume, and more.
          </p>
        </SectionIntro>
      </div>
      <IntroSectionNftCollection blockchain={blockchain} />
      <NftTableCollections
        symbol={symbol}
        isLoading={false}
        limit={limit}
        data={data}
        title="Polygon Blockchain NFT"
        total={total}
      />
    </div>
  )
}

export default NftPolygon
