import { Button } from '@/shared/ui'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

export const ProfileSignOut: React.FC = () => {
  const handleSignOut = () => signOut()
  return (
    <Button
      variant={'ghost'}
      className="w-full flex justify-between"
      onClick={handleSignOut}
    >
      <span>Logout</span>
      <LogOut className="opacity-50" />
    </Button>
  )
}
