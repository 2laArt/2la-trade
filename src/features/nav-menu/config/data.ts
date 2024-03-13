import { paths } from '@/shared/routing'

interface INavLink {
  title: string
  href: string
  description: string
}

const coinLinks: INavLink[] = [
  {
    title: 'Top Gainers',
    href: paths.coinShowroom('top-gainers'),
    description: '',
  },
  {
    title: 'Top Losers',
    href: paths.coinShowroom('top-losers'),
    description: '',
  },
  {
    title: 'Recently Added',
    href: paths.coinShowroom('recently-added'),
    description: '',
  },
  {
    title: 'Trending',
    href: paths.coinShowroom('trending'),
    description: '',
  },
  {
    title: 'Most Popular',
    href: paths.coinShowroom('most-popular'),
    description: '',
  },
]

const nftLinks: INavLink[] = [
  {
    title: 'Ethereum NFTs',
    href: paths.nftCollections('ethereum'),
    description: '',
  },
  {
    title: 'Cronos NFTs',
    href: paths.nftCollections('cronos'),
    description: '',
  },
  {
    title: 'Solana NFTs',
    href: paths.nftCollections('solana'),
    description: '',
  },
  {
    title: 'Crypto.org NFTs',
    href: paths.nftCollections('crypto-org'),
    description: '',
  },
  {
    title: 'Polygon NFTs',
    href: paths.nftCollections('polygon'),
    description: '',
  },
]
const nftNavLinks: INavLink[] = [
  {
    href: paths.nftCollections('ethereum'),
    title: 'NFT Collections',
    description: 'This list displays all nft collections',
  },
  {
    href: paths.nftWatch,
    title: 'NFT Whale Watch',
    description: 'This list displays the most recent 50 transactions',
  },
  {
    href: paths.nftGuide,
    title: 'NFT Guide',
    description: 'Guidelines for use and application',
  },
]
export { type INavLink, coinLinks, nftNavLinks, nftLinks }
