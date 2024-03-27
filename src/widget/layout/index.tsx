'use client'
import React from 'react'
import { HeaderCart, HeaderProfile, Logo } from './ui'
import { ModeToggle } from '@/features/theme'
import { NavMenu } from '@/features/nav-menu'
import { useUserSession } from '@/features/auth/lib'

export const MainLayout: React.FC<
  React.PropsWithChildren<{ variant: 'auth' | 'private' | 'public' }>
> = ({ children, variant }) => {
  const { data: session } = useUserSession()

  const isAuth = variant === 'auth'
  return (
    <main className="min-h-[100svh] container">
      <header className="bg-background sticky top-0 z-20 w-full  px-2 py-4 flex gap-1 items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
        <Logo />
        {!isAuth && <NavMenu />}
        <div className=" flex gap-3">
          <ModeToggle />
          {!isAuth && <HeaderProfile user={session?.user} />}
        </div>
        {session?.user.id && <HeaderCart userId={session.user.id} />}
      </header>
      <div className="mt-6 md:mt-10">{children}</div>
      <footer className="flex items-center justify-center min-h-10 sticky top-[100vh]">
        <span>2la@google.com</span>
      </footer>
    </main>
  )
}
