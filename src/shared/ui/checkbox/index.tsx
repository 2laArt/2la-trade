'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cn } from '@/shared/lib'
import { CheckIcon, StarIcon } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'

const checkboxVariants = cva(
  'peer shrink-0  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border shadow border-primary bg-transparent data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        blue: 'border shadows border-primary bg-transparent data-[state=checked]:bg-blue-600  data-[state=checked]:text-white',
        star: 'data-[state=checked]:fill-yellow-500 dark:text-white text-zinc-400 fill-transparent data-[state=checked]:text-yellow-300 data-[state=checked]:dark:text-yellow-300',
      },
      size: {
        default: 'h-4 w-4',
        sm: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type TypeCheckboxProps = React.ForwardRefExoticComponent<
  CheckboxPrimitive.CheckboxProps &
    React.RefAttributes<HTMLButtonElement> &
    VariantProps<typeof checkboxVariants>
>

const Checkbox = React.forwardRef<
  React.ElementRef<TypeCheckboxProps>,
  React.ComponentPropsWithoutRef<TypeCheckboxProps>
>(({ className, size, variant, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ size, variant, className }))}
    {...props}
  >
    {/* [&>th]:text-center */}

    {variant === 'star' ? (
      <StarIcon className="transition-color text- fill-inherit w-full h-full" />
    ) : (
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <CheckIcon className="stroke-[4px] w-full h-full" />
      </CheckboxPrimitive.Indicator>
    )}
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
