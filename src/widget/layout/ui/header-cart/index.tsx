'use client'
import { useQueryGetUserCart } from '@/entities/cart/model'
import React from 'react'

export const HeaderCart = React.memo(({ userId }: { userId: string }) => {
  const { data } = useQueryGetUserCart(userId)
  return null
})
HeaderCart.displayName = 'HeaderCart'
