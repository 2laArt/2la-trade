import { type NextPage } from 'next'
import { SectionIntro } from '@/shared/ui/section-intro'
import React from 'react'
import { NftTable } from '@/widget/nft-table'
import { nftServices } from '@/entities/nft/model'
import { IntroSectionNftCollection } from '@/widget/intro-section-nft-collection'

const NftCronos: NextPage<{
  searchParams: {
    page: string
    limit: string
  }
}> = async ({ searchParams: { page: pageUrl } }) => {
  const page = Number(pageUrl) || 1
  const limit = 10
  const blockchain = 1
  const symbol = 'CRO'
  const { data, total } = await nftServices.collections({
    blockchain,
    limit,
    page,
  })

  return (
    <div>
      <div>
        <SectionIntro title="Cronos NFT">
          <p>
            Cronos NFT Collections shows the name, sales and volume of the top
            30 NFTs on the Cronos blockchain.
          </p>
          <p>
            Discover the top 30 collectibles on the Cronos blockchain by 7-day
            average price, volume, and sales.
          </p>
        </SectionIntro>
      </div>
      <IntroSectionNftCollection blockchain={blockchain} />
      <NftTable
        symbol={symbol}
        isLoading={false}
        limit={limit}
        data={data}
        title="Cronos blockchain NFT"
        total={total}
      />
    </div>
  )
}

export default NftCronos
