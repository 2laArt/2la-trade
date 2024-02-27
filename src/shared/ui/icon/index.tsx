import { cn } from '@/shared/lib'
import { Sprite } from './sprite'

export type IconName<Group extends keyof Sprite> = Sprite[Group]

export interface IconProps<Group extends keyof Sprite> {
  name: IconName<Group>
  type: Group
  className?: string
}

export function Icon<Group extends keyof Sprite>({
  name,
  type,
  className,
}: IconProps<Group>) {
  return (
    <svg className={cn('w-full h-full', className)}>
      <use
        className="inline-block h-full w-full"
        xlinkHref={`/sprites/${type}.svg#${name}`}
      />
    </svg>
  )
}
{
}
