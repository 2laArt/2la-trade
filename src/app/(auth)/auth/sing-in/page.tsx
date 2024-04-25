'use client'
import { NextPage } from 'next'
import React from 'react'

import { SingInSection } from '@/features/auth/ui'

const AuthenticationPage: NextPage = () => {
  return (
    <div className="w-full max-h-svh flex items-center justify-center">
      <SingInSection />
    </div>
  )
}

export default AuthenticationPage
