import { useTheme } from 'next-themes'
import React from 'react'

const darkColors = {
  scaleColor: '#082f49',
  bg: 'rgb(0, 117, 240,0.3)',
  border: '#0284c7',
  scaleTextColor: '#cccc',
}
const lightColors = {
  bg: 'rgba(37, 99, 235, 0.1)',
  border: 'rgba(37, 99, 235, 0.6)',
  scaleColor: '#f5f5f1',
  scaleTextColor: '#0c4a6e',
}

export const useChartTheme = () => {
  const [colors, setColors] = React.useState(lightColors)
  const { theme, systemTheme } = useTheme()
  const isDefaultDark = systemTheme === 'dark'
  React.useEffect(() => {
    if (theme === 'dark' || (theme === 'system' && isDefaultDark)) {
      setColors(darkColors)
    } else {
      setColors(lightColors)
    }
  }, [isDefaultDark, theme])

  return colors
}
