import React from 'react'

export const SectionIntro: React.FC<{
  title: string
  children: React.ReactNode
}> = ({ children, title }) => (
  <div>
    <h1 className="font-semibold text-2xl mb-4">{title}</h1>
    <div className="[&>*]:my-2 [&>*]:text-sm dark:text-slate-400 text-slate-800">
      {children}
    </div>
  </div>
)
