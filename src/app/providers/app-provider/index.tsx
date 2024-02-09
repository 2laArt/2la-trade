'use client'
import { queryClient } from '@/shared/api'
import { ComposeComponents } from '@/shared/lib'
import { QueryClientProvider } from '@tanstack/react-query'
import { type FC, type ReactNode } from 'react'

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ComposeComponents>
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeComponents>
  )
}
