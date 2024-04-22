import { cn } from '@/shared/lib'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui'

export const TickerDrawer: React.FC<{
  title: React.ReactNode
  children: React.ReactNode
  className?: string
}> = ({ children, title, className }) => {
  return (
    <Drawer>
      <DrawerTrigger
        className={cn(
          'bg-blue-700 p-2 rounded-md text-white text-sm transition-colors hover:bg-blue-800',
          className
        )}
      >
        Show Chart
      </DrawerTrigger>
      <DrawerContent className="justify-between">
        <div className="max-w-3xl w-full flex flex-col mx-auto">
          <DrawerHeader>
            <DrawerTitle asChild>{title}</DrawerTitle>
          </DrawerHeader>
        </div>
        <div className="max-w-3xl w-full flex flex-col px-1 mx-auto">
          <DrawerDescription asChild>{children}</DrawerDescription>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
