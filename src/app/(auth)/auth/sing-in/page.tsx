'use client'
import { NextPage } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'

import { SingInSection } from '@/features/auth/ui'
import { useUserSession } from '@/features/auth/lib'

const AuthenticationPage: NextPage = () => {
  const { data: session } = useUserSession()

  React.useEffect(() => {
    console.log(session)

    if (session) redirect('/')
  }, [session])

  return (
    <div className="w-full max-h-svh flex items-center justify-center">
      <SingInSection />
    </div>
  )
}

export default AuthenticationPage
