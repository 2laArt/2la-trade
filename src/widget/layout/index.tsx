'use client'
import React from 'react'
import { Footer, HeaderCart, HeaderProfile } from './ui'
import { ModeToggle } from '@/features/theme'
import { Logo, NavMenuDesktop } from '@/features/nav-menu'
import { useUserSession } from '@/features/auth/lib'
import { useMediaQuery } from 'react-responsive'
import { NavMenuMobile } from '@/features/nav-menu/ui'

export const MainLayout: React.FC<
  React.PropsWithChildren<{ variant: 'auth' | 'private' | 'public' }>
> = ({ children, variant }) => {
  const { data: session } = useUserSession()
  const [isLoaded, setIsLoaded] = React.useState(false)
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  })
  React.useEffect(() => {
    setIsLoaded(true)
  }, [])
  const isAuth = variant === 'auth'
  return (
    <main className="min-h-[100svh] ">
      <header className="card sticky top-0 z-20 w-full px-2 py-4  border-b border-zinc-200 dark:border-zinc-800">
        <div className="container flex gap-1 items-center justify-between">
          <Logo />
          {isLoaded && !isMobile && !isAuth && <NavMenuDesktop />}
          <div className=" flex gap-5">
            <ModeToggle />
            {!isAuth && <HeaderProfile user={session?.user} />}
            {session?.user.id && <HeaderCart userId={session.user.id} />}

            {isLoaded && isMobile && !isAuth && <NavMenuMobile />}
          </div>
        </div>
      </header>

      <div className="mt-6 md:mt-10 container">{children}</div>
      <Footer />
    </main>
  )
}
