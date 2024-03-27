import { MainLayout } from '@/widget/layout'
import { type PropsWithChildren, type FC } from 'react'

const layout: FC<PropsWithChildren> = ({ children }) => {
  return <MainLayout variant="auth">{children}</MainLayout>
}

export default layout
