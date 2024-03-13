'use client'
import { ActiveLink, Each } from '@/shared/ui'
import React from 'react'
import { usePathname } from 'next/navigation'
import { INavLink } from '../../config/data'

export const NavThroughSection = React.memo(
  ({ links }: { links: INavLink[] }) => {
    const pathname = usePathname()

    return (
      <div className="flex gap-5">
        <Each
          arr={links}
          render={(item) => (
            <ActiveLink
              className="py-2 px-4 transition-colors rounded-full hover:text-white dark:hover:bg-blue-500 hover:bg-blue-500 dark:bg-slate-900 bg-white "
              activeClass="bg-blue-500 dark:bg-blue-500 text-white"
              pathname={pathname}
              href={item.href}
              key={item.title}
            >
              {item.title}
            </ActiveLink>
          )}
        />
      </div>
    )
  }
)
NavThroughSection.displayName = 'NavThroughSection'
