import { type PropsWithChildren, type FC } from 'react'
import { Logo, Profile } from './ui'
import { ModeToggle } from '@/features/theme'
import { NavMenu } from '@/features/nav-menu'

export const MainLayout: FC<
  PropsWithChildren<{ variant: 'auth' | 'private' | 'public' }>
> = ({ children, variant }) => {
  const isProfile = variant !== 'auth'
  return (
    <main className="min-h-[100svh] container">
      <header className="sticky top-0 z-20 w-full bg-background  px-2 py-4 flex gap-1 items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
        <Logo />
        <NavMenu />
        <div className=" flex gap-3">
          <ModeToggle />
          {isProfile && <Profile />}
        </div>
      </header>
      <div className="mt-6 md:mt-10">{children}</div>
      <footer className="flex items-center justify-center min-h-10 sticky top-[100vh]">
        <span>2la@google.com</span>
      </footer>
    </main>
  )
}
