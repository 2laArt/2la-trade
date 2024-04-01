import { paths } from '@/shared/routing'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo: React.FC = () => {
  return (
    <Link
      href={paths.home}
      className="text-base text-blue-700 font-semibold items-center flex gap-2"
    >
      <Image src={'/images/logo.png'} alt="Logo" width={40} height={40} />
      2La Trade
    </Link>
  )
}
