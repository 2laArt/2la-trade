import { priceWithSuffix } from '@/shared/lib'
import { ChartOptions, CoreScaleOptions, Scale, Tick } from 'chart.js'

export const chartOptions: ChartOptions = {
  responsive: true,
  resizeDelay: 200,

  interaction: {
    // Overrides the global setting
    mode: 'nearest',
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: false,
      align: 'end',
    },
    decimation: {
      enabled: false,
      algorithm: 'min-max',
    },
  },
  layout: {
    padding: 10,
  },

  scales: {
    y: {
      ticks: {
        source: 'auto',
        autoSkip: true,
        maxTicksLimit: 7,
        callback(
          this: Scale<CoreScaleOptions>,
          tickValue: string | number,
          index: number,
          ticks: Tick[]
        ) {
          if (+tickValue < 1) return tickValue.toString().substring(0, 3)
          const countFixed = +tickValue >= 10 ? 0 : 1
          return priceWithSuffix(+tickValue, '', countFixed)
        },
      },
    },
    x: {
      title: {
        text: 'Time',
      },
      display: true,
      grid: {
        color: '',
        display: false,
        z: -1000,
      },
      ticks: {
        source: 'auto',
        autoSkip: true,
        maxTicksLimit: 7,
      },
    },
  },
}
