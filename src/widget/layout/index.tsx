import { type PropsWithChildren, type FC } from 'react'
import { Logo, Nav, Profile } from './ui'
import { ModeToggle } from '@/features/theme'

export const MainLayout: FC<
  PropsWithChildren<{ variant: 'auth' | 'private' | 'public' }>
> = ({ children, variant }) => {
  const isProfile = variant !== 'auth'
  return (
    <main className="min-h-[100svh] container">
      <header className=" py-2 flex gap-1 items-center justify-between">
        <Logo />
        <Nav />
        <div className=" flex gap-3">
          <ModeToggle />
          {isProfile && <Profile />}
        </div>
      </header>
      {children}
      <footer className="flex items-center justify-center min-h-10 sticky top-[100vh]">
        <span>2la@google.com</span>
      </footer>
    </main>
  )
}
