'use client'
import { ProfileAvatar } from '@/entities/user/ui'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { type IProfile } from '@/entities/user/model'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui'
import { ProfileSignOut } from '../profile-sign-out'
import { paths } from '@/shared/routing'

export const Profile: React.FC<{ profile?: IProfile }> = ({ profile }) => {
  if (profile)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <ProfileAvatar
            className="w-10 h-10 cursor-pointer hover:opacity-70 transition-opacity"
            profile={profile}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            <div className="text-xs opacity-45">Name</div>
            <div>{profile.name}</div>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <div className="text-xs opacity-45">Email</div>
            <div>{profile.email}</div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ProfileSignOut />
        </DropdownMenuContent>
      </DropdownMenu>
    )
  return (
    <Link
      href={paths.singIn}
      className="w-10 h-10 border border-gray-500/10 dark:border-gray-500/30  rounded-md leading-10  grid place-items-center"
    >
      <LogIn size={20} />
    </Link>
  )
}
