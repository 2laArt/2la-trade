export const paths = {
  home: '/',
  auth: '/auth',
  dashboard: '/dashboard',
  trade: '/trade',
  coinCategories: '/coins/categories',
  coinShowroom: (
    filter:
      | 'top-gainers'
      | 'top-losers'
      | 'recently-added'
      | 'trending'
      | 'most-popular'
  ) => `/coins/showroom/${filter}`,
  nftGuide: '/nft/guide',
  nftCollections: '/nft/collections',
  nftWatch: '/nft/whale-watch',
}
