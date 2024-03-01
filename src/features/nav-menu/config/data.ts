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
    href: paths.nftCollections,
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
export { type INavLink, coinLinks, nftLinks }
