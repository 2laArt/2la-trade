export const paths = {
  home: '/',
  auth: '/auth',
  dashboard: '/dashboard',
  trade: '/trade',
  coinCategories: '/coins/categories',
  coinSlug: (slug: string) => `/coins/${slug}`,
  coinShowroom: (
    filter:
      | 'top-gainers'
      | 'top-losers'
      | 'recently-added'
      | 'trending'
      | 'most-popular'
  ) => `/coins/showroom/${filter}`,
  nftGuide: '/nft/guide',
  nftCollections: (
    section: 'ethereum' | 'cronos' | 'solana' | 'crypto-org' | 'polygon'
  ) => `/nft/collections/${section}`,
  nftSlug: (slug: string) => `/nft/${slug}`,
  nftWatch: '/nft/whale-watch',
}
