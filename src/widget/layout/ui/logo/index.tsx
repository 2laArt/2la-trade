import { paths } from '@/shared/routing'
import Link from 'next/link'
import React from 'react'

export const Logo: React.FC = React.memo(() => {
  return (
    <Link href={paths.home} className="text-base text-blue-700 font-semibold">
      2La Trade
    </Link>
  )
})
Logo.displayName = 'Logo'
