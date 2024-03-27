'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import style from './styles.module.css'
import { Button } from '@/shared/ui'
import { cn } from '@/shared/lib'

interface IFields {
  email: string
  password: string
}
export const SingInForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFields>()
  const onSubmit: SubmitHandler<IFields> = (data) =>
    signIn('credentials', { ...data })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn('card', style.form_item)}>
          <input {...register} type="text" autoFocus required />
          <label>Username</label>
        </div>
        <div className={cn('card', style.form_item)}>
          <input {...register} type="password" required />
          <label>Password</label>
        </div>
        <div className={style.form_submit}>
          <Button
            className={cn('bg-blue-600 hover:bg-blue-600')}
            variant={'auth'}
            size={'full'}
            type="submit"
          >
            Log in
          </Button>
        </div>
      </form>
    </>
  )
}
