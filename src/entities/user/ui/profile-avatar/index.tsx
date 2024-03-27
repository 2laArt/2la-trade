import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { cn } from '@/shared/lib'
import { IProfile } from '../../model'
import { getProfileLitters } from '../../lib'
import React from 'react'

export const ProfileAvatar: React.FC<{
  profile?: IProfile
  className?: string
}> = ({ profile, className }) => {
  if (!profile) {
    return null
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={profile.image ?? ''} className="object-cover" />
      <AvatarFallback className="bg-white/70 border-gray-500/10 dark:bg-slate-900 border dark:border-gray-500/30">
        {getProfileLitters(profile)}
      </AvatarFallback>
    </Avatar>
  )
}
