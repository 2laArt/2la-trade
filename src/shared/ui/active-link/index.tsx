import { cn } from '@/shared/lib'
import Link from 'next/link'
import { ReactNode, type FC } from 'react'

export const ActiveLink: FC<{
  pathname: string
  href: string
  children: ReactNode
  className?: string
  activeClass?: string
}> = ({ href, children, pathname, activeClass, className }) => {
  const isActive = pathname === href.split('?')[0]
  return (
    <Link className={cn(className, isActive && activeClass)} href={href}>
      {children}
    </Link>
  )
}
