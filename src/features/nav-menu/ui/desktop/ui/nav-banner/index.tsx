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
      <div className="flex h-full w-full flex-row md:flex-col max-md:items-center select-none justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
        <div className="flex flex-col md:mr-0 mr-6">
          {icon}

          <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
        </div>
        <p className="text-sm leading-tight text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}
