import { cn } from '@/shared/lib'
import Link from 'next/link'
import { type FC } from 'react'

export const ActiveLink: FC<{
  pathname: string
  href: string
  name: string
}> = ({ href, name, pathname }) => {
  const isActive = pathname === href.split('?')[0]
  return (
    <Link
      className={cn(
        'px-3 py-1 cursor-pointer transition-[color] hover:text-orange-300 bg-background',
        isActive && 'text-orange-300'
      )}
      href={href}
    >
      {name}
    </Link>
  )
}
