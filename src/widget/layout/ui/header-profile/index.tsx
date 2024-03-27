'use client'
import { IUser } from '@/entities/user/model'
import { Profile } from '@/features/auth/ui'
import React from 'react'

export const HeaderProfile: React.FC<{ user?: IUser }> = ({ user }) => {
  const profileProps = user
    ? {
        email: user.email,
        name: user.name,
        image: user.image,
      }
    : undefined

  return <Profile profile={profileProps} />
}
