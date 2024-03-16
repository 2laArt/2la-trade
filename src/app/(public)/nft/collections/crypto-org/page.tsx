import { type NextPage } from 'next'
import { SectionIntro } from '@/shared/ui/section-intro'
import React from 'react'
import { NftTable } from '@/widget/nft-table'
import { nftServices } from '@/entities/nft/model'

const NftCryptoOrg: NextPage<{
  searchParams: {
    page: string
    limit: string
  }
}> = async ({ searchParams: { page: pageUrl } }) => {
  const page = Number(pageUrl) || 1
  const limit = 10
  const blockchain = 3
  const symbol = '$'
  const { data, total } = await nftServices.collections({
    blockchain,
    limit,
    page,
  })

  return (
    <div>
      <div>
        <SectionIntro title="Crypto.org Chain NFTs">
          <p>
            Crypto.org Chain NFT Collections shows the name, sales and volume of
            the top NFTs native to the Crypto.org blockchain.
          </p>
          <p>
            Discover the top NFT collections on the Crypto.org blockchain. View
            the collection value, floor price, 7-day transaction volume, and
            more.
          </p>
        </SectionIntro>
      </div>

      <NftTable
        symbol={symbol}
        isLoading={false}
        limit={limit}
        data={data}
        title="Crypto.org blockchain NFT"
        total={total}
      />
    </div>
  )
}

export default NftCryptoOrg
