import { ChartOptions } from 'chart.js'

export const chartOptions: ChartOptions = {
  responsive: true,
  resizeDelay: 200,
  interaction: {
    // Overrides the global setting
    mode: 'nearest',
    intersect: false,
  },
  plugins: {
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
      },
      ticks: {
        source: 'auto',
        autoSkip: true,
        maxTicksLimit: 7,
      },
    },
  },
}
