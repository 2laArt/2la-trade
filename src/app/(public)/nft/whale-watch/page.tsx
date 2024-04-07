import { nftServices } from '@/entities/nft/model'
import { SectionIntro } from '@/shared/ui/section-intro'
import { NftTableWhales } from '@/widget/nft-table'
import { type NextPage } from 'next'

const Whales: NextPage<{
  searchParams: {
    page: string
    limit: string
  }
}> = async ({ searchParams: { page: pageUrl } }) => {
  const page = Number(pageUrl) || 1
  const limit = 10
  const { data, total } = await nftServices.whales({ limit: limit, page })
  const title = 'NFT Whale Watch'
  return (
    <div>
      <div>
        <SectionIntro title={title}>
          <p>
            <strong>{title}</strong> tracks the non-fungible tokens (NFTs)
            purchased or minted by the largest NFT asset holders on the Ethereum
            blockchain. ‘Whale’ is a term for individuals or entities that hold
            large amounts of crypto-related assets.
          </p>
          <p>This list displays the most recent 50 transactions.</p>
        </SectionIntro>
      </div>

      <NftTableWhales
        limit={limit}
        title={title}
        isLoading={false}
        data={data}
        total={total}
      />
    </div>
  )
}

export default Whales
