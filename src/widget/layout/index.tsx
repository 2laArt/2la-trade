'use client'
import React from 'react'
import { HeaderCart, HeaderProfile } from './ui'
import { ModeToggle } from '@/features/theme'
import { Logo, NavMenuDesktop } from '@/features/nav-menu'
import { useUserSession } from '@/features/auth/lib'
import { useMediaQuery } from 'react-responsive'
import { NavMenuMobile } from '@/features/nav-menu/ui'
import Link from 'next/link'

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
      <footer className="card py-4 border-t sticky top-[100vh] min-h-10 mt-10">
        <div className="container flex flex-col items-center ">
          <div>
            <div className="flex gap-3 my-2">
              <span className="font-medium">Email: </span>
              <Link className="" href="mailto:2laartmorozov@gmail.com">
                2laartmorozov@gmail.com
              </Link>
            </div>
            <div className="flex gap-3">
              <span className="font-medium">Github: </span>
              <Link href="https://github.com/2laArt">2laArt</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
