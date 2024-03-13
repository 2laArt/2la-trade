'use client'

import { type INavLink, coinLinks, nftLinks, nftNavLinks } from './config/data'
import { NavMenuDesktop, NavMenuMobile, NavThroughSection } from './ui'

const NavMenu = () => <NavMenuDesktop />

export {
  NavMenu,
  type INavLink,
  coinLinks,
  nftLinks,
  nftNavLinks,
  NavMenuDesktop,
  NavThroughSection,
}
