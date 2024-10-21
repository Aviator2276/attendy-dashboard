let options = {
  chart: {
    height: '95%',
    maxWidth: '100%',
    type: 'line',
    fontFamily: 'Inter, sans-serif',
    dropShadow: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  theme: {
    mode: darkModeGraph,
    palette: 'palette1',
  },
  tooltip: {
    enabled: true,
    fillSeriesColor: false,
    highlightDataSeries: true,
    x: {
      show: false,
    },
    y: {
      show: true,
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: 10,
    style: {
      cssClass: 'text-xs text-white font-medium',
    },
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: true,
    strokeDashArray: 8,
    padding: {
      left: 2,
      right: 2,
      top: -26,
    },
  },
  series: [
    {
      name: 'Points Scored',
      data: [],
      color: '#f59e0b',
    },
    {
      name: 'Defenses',
      data: [],
      color: '#10b981',
    },
    {
      name: 'Boulder',
      data: [],
      color: '#e11d48',
    },
    {
      name: 'End Game',
      data: [],
      color: '#7E3AF2',
    },
  ],
  legend: {
    show: true,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: ['Qual 1', 'Qual 2', 'Qual 3', 'Qual 4', 'Qual 5', 'Qual 6'],
    labels: {
      show: true,
      style: {
        fontFamily: 'Inter, sans-serif',
        cssClass: 'text-xs font-normal text-white',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  clip: false,
};

const charts = {};
charts['chart'] = new ApexCharts(document.getElementById('chart-001'), options);
charts['chart'].render();
charts['chart'].updateOptions({
  series: [
    {
      name: 'Points Scored',
      data: [1, 4, 3, 5, 2, 4, 1, 4, 2],
      color: '#f59e0b',
    },
    {
      name: 'Defenses',
      data: [12, 34, 12, 43, 24, 21, 43, 34],
      color: '#10b981',
    },
    {
      name: 'Boulder',
      data: [1, 2, 4, 1, 2, 4, 3, 1, 3],
      color: '#e11d48',
    },
    {
      name: 'End Game',
      data: [1, 2, 4, 2, 1, 3, 4, 4, 3, 1, 3],
      color: '#7E3AF2',
    },
  ],
  xaxis: {
    categories: [1, 2, 4, 5, 4, 2, 3, 4, 1, 3, 5, 3],
  },
});
