'use client'
import { ThemeProvider } from '@/features/theme'
import { queryClient } from '@/shared/api'
import { ComposeComponents } from '@/shared/lib'
import { QueryClientProvider } from '@tanstack/react-query'
import { type FC, type ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { UserCartProvider } from '@/entities/cart/context'
export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ComposeComponents>
      <SessionProvider>
        <></>
      </SessionProvider>
      <UserCartProvider />
      <ThemeProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeComponents>
  )
}
