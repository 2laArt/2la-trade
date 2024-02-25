import React from 'react'

interface IEach<T> {
  arr: Array<T>
  render: (item: T, idx: number) => React.ReactNode
}

export const Each = <T,>({ arr, render }: IEach<T>) =>
  React.Children.toArray(arr.map((item, idx) => render(item, idx)))
