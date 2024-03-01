'use client'
import { ActiveLink, Each } from '@/shared/ui'
import React from 'react'
import { coinLinks } from '../../config/data'
import { usePathname } from 'next/navigation'

export const ShowroomLinks = React.memo(() => {
  const pathname = usePathname()

  return (
    <div className="flex gap-5">
      <Each
        arr={coinLinks}
        render={(item) => (
          <ActiveLink
            className="py-2 px-4 transition-colors rounded-full dark:bg-slate-900 bg-white "
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
})
ShowroomLinks.displayName = 'ShowroomLinks'
