'use client'

import React from 'react'
import { type INavLink, coinLinks, nftLinks, nftNavLinks } from './config/data'
import { NavMenuDesktop, NavMenuMobile, NavThroughSection } from './ui'

const NavMenu = React.memo(() => <NavMenuDesktop />)
NavMenu.displayName = 'NavMenu'
export {
  NavMenu,
  type INavLink,
  coinLinks,
  nftLinks,
  nftNavLinks,
  NavMenuDesktop,
  NavThroughSection,
}
