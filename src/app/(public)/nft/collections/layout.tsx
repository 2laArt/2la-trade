import { NavThroughSection, nftLinks } from '@/features/nav-menu'
import { type NextPage } from 'next'
import React from 'react'

const CollectionsLayout: NextPage<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <div className="sticky bg-background top-[73px] -mt-6 md:-mt-10 mb-8 z-10">
        <NavThroughSection links={nftLinks} />
      </div>
      {children}
    </div>
  )
}

export default CollectionsLayout
