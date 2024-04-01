'use client'
import { useQueryGetUserCart } from '@/entities/cart/model'
import { Activity } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const HeaderCart = React.memo(({ userId }: { userId: string }) => {
  const { data } = useQueryGetUserCart(userId)
  return (
    <Link href={'/tickers'}>
      <Activity size={40} />
    </Link>
  )
})
HeaderCart.displayName = 'HeaderCart'
