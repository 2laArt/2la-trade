'use client'

import { paths } from '@/shared/routing'
import { ActiveLink } from '@/shared/ui'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { type FC } from 'react'

const links = [
  {
    href: paths.dashboard,
    name: 'Dashboard',
  },
  {
    href: paths.home,
    name: 'Home',
  },
]

export const Nav: FC = () => {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex gap-2">
        {links.map(({ href, name }) => (
          <li key={href}>
            <ActiveLink href={href} name={name} pathname={pathname} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
