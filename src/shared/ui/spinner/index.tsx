import { cn } from '@/shared/lib'
import type { CSSProperties, FC } from 'react'
import styles from './styles.module.css'
export const Spinner: FC<{
  size?: number
  color?: string
}> = ({ size = 50, color = '#0075f0' }) => {
  return (
    <span
      style={
        {
          '--size': `${size}px`,
          '--color': color,
        } as CSSProperties
      }
      className={cn(styles.loader)}
    ></span>
  )
}
