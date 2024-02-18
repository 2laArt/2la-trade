// 'use client'
// import { cn } from '@/shared/lib'
// import { type CSSProperties, useRef, type FC, useEffect, useState } from 'react'

// interface IChartProps {
//   className?: string
// }

// export const SmallChart: FC<IChartProps> = ({ className }) => {
//   const [length, setLength] = useState<string>()
//   const ref = useRef<SVGPolygonElement>(null)
//   useEffect(() => {
//     const len = ref.current?.getTotalLength()
//     console.log(len)

//     if (!!len) setLength('100%')
//   }, [ref])
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       version="1.1"
//       viewBox="0 0 100 100"
//       preserveAspectRatio="none"
//     >
//       <symbol
//         id="chart"
//         style={
//           {
//             '--chart-len': length,
//             strokeDasharray: length,
//             strokeDashoffset: length,
//           } as CSSProperties
//         }
//         className={cn(
//           'opacity-0',
//           !!length && 'opacity-100 animate-chart-show',
//           className
//         )}
//       >
//         <polyline
//           ref={ref}
//           points="0 10, 20 0, 40 60, 60 10, 80 30, 144 50"
//           stroke="#00A68C"
//           strokeLinecap="round"
//           strokeWidth="1.4"
//           fill="none"
//           vectorEffect="non-scaling-stroke"
//         ></polyline>
//       </symbol>
//       <use xlinkHref="#chart" />
//     </svg>
//   )
// }
