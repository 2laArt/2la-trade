export const NavBanner = ({
  icon,
  description,
  title,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <div>
      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
        {icon}
        <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
        <p className="text-sm leading-tight text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}
