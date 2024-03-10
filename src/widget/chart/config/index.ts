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
  datasets: {},
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
