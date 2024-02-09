import { Children, type ReactNode, createElement, isValidElement } from 'react'

export function ComposeComponents({ children }: { children: ReactNode }) {
  const array = Children.toArray(children)
  const last = array.pop()
  return (
    <>
      {array.reduceRight(
        (acc, element) =>
          isValidElement(element)
            ? createElement(element.type, element.props, acc)
            : acc,
        last
      )}
    </>
  )
}
