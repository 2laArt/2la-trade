import { NavThroughSection } from '@/features/nav-menu/ui/nav-through-section'
import { nftLinks } from '@/features/nav-menu/config/data'
import { type NextPage } from 'next'
import React from 'react'

const CollectionsLayout: NextPage<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <div className="sticky top-[73px] -mt-6 md:-mt-10 mb-8 z-10">
        <NavThroughSection links={nftLinks} />
      </div>
      {children}
    </div>
  )
}

export default CollectionsLayout
