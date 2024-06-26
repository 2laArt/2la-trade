'use client'
import { ActiveLink } from '@/shared/ui/active-link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { INavLink } from '../../config/data'

export const NavThroughSection: React.FC<{ links: INavLink[] }> = ({
  links,
}) => {
  const pathname = usePathname()

  return (
    <div className="bg-transparent backdrop-blur-lg flex gap-5 max-[850px]:gap-2 max-md:flex-wrap py-2 max-md:py-2">
      {links.map(
        (item) =>
          item.title && (
            <ActiveLink
              className=" max-[850px]:py-1  max-[850px]:px-2  max-[850px]:text-sm py-2 px-4 transition-colors rounded-full hover:text-white dark:hover:bg-blue-500 hover:bg-blue-500 dark:bg-slate-900 bg-white "
              activeClass="bg-blue-500 dark:bg-blue-500 text-white"
              pathname={pathname}
              href={item.href}
              key={item.title}
            >
              {item.title}
            </ActiveLink>
          )
      )}
    </div>
  )
}
