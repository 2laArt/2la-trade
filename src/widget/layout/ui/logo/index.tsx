import { paths } from '@/shared/routing'
import Link from 'next/link'
import { type FC } from 'react'

export const Logo: FC = () => {
  return (
    <Link href={paths.home} className="text-base text-blue-700 font-semibold">
      2La Trade
    </Link>
  )
}
