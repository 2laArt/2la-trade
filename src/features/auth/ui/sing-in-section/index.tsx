import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { BuiltInProviderType } from 'next-auth/providers/index'
import { LiteralUnion, signIn } from 'next-auth/react'
import React from 'react'

const callbackUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL
export const SingInSection: React.FC = () => {
  const handler = (provider: LiteralUnion<BuiltInProviderType>) => {
    signIn(provider, { callbackUrl })
  }
  return (
    <section
      className={cn(
        'card relative max-w-[400px] min-w-[370px] box-border min-h-[336px] rounded text-center shadow-lg overflow-hidden p-10'
      )}
    >
      <h3 className="text-xs font-semibold opacity-50">Authorization</h3>
      <h1 className="mt-2 mb-5 text-lg font-semibold opacity-70">
        Log in to your account
      </h1>
      <div>
        <Button
          className={cn('hover:bg-indigo-800 bg-indigo-800 my-2 flex gap-2')}
          type="button"
          variant={'auth'}
          size={'full'}
          onClick={() => handler('google')}
        >
          <span
            className={
              'font-bold text-lg bg-gradient-to-t from-yellow-100 to-orange-700  bg-clip-text'
            }
            style={{
              WebkitTextFillColor: 'transparent',
            }}
          >
            G
          </span>
          <span>continua with google</span>
        </Button>

        <Button
          className={cn('bg-teal-800 my-2 flex gap-2')}
          type="button"
          variant={'auth'}
          size={'full'}
          onClick={() => handler('yandex')}
        >
          <span
            className={
              'font-bold w-5 h-5 grid place-items-center text-base bg-white text-red-700 leading-3  p-1 rounded-full'
            }
          >
            <span className="pl-[1px] pt[1px]">Y</span>
          </span>
          <span>continua with yandex</span>
        </Button>
        <Button
          className={cn('hover:bg-cyan-800 bg-cyan-800 my-2 flex gap-2')}
          type="button"
          variant={'auth'}
          size={'full'}
          onClick={() => handler('github')}
        >
          <GitHubLogoIcon />
          <span> continua with github</span>
        </Button>
      </div>
    </section>
  )
}
