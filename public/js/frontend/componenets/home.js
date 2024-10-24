import { graph, updateChart, deleteChart } from './line-chart.js';

const homeLineGraphID = 'homeLineGraph';

export const homeView = () => {
  return homeHeader() + homeContent();
};

const homeHeader = () => {
  return `
    <header class="shadow">
        <div class="mx-auto px-4 md:max-w-6xl py-6 md:px-6 lg:px-8">
        <h1
            class="m-2 md:m-4 text-4xl font-bold text-slate-800 dark:text-slate-200"
        >
            Welcome, Admin
        </h1>
        <p class="m-2 md:m-4 text-1xl text-slate-800 dark:text-slate-200">
            General Attendance Data
        </p>
        </div>
    </header>
    `;
};

const homeContent = () => {
  return `
    <div class="mx-auto px-4 md:max-w-6xl py-6 md:px-6 lg:px-8">
        ${chartContainer()}
    </div>
    `;
};

const chartContainer = () => {
  return `
  <section
    class="h-80 m-2 md:m-4 p-4 text-center border rounded-lg shadow sm:p-8 bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-700"
    >
    ${graph(homeLineGraphID, homeLineGraphOptions)}
  </section>`;
};

export const loadHomeTheme = () => {
  updateChart(homeLineGraphID, {
    theme: {
      mode: localStorage.getItem('color-theme'),
      palette: 'palette1',
    },
  });
};

export const updateHomeTheme = () => {
  updateChart(homeLineGraphID, {
    theme: {
      mode: localStorage.getItem('color-theme') === 'light' ? 'dark' : 'light',
      palette: 'palette1',
    },
  });
};

export const offloadHome = () => {
  deleteChart(homeLineGraphID);
};

const homeLineGraphOptions = {
  chart: {
    height: '100%',
    maxWidth: '100%',
    type: 'line',
    fontFamily: 'Inter, sans-serif',
    dropShadow: {
      enabled: true,
    },
    toolbar: {
      show: true,
    },
  },
  theme: {
    mode: localStorage.getItem('color-theme'),
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
      cssClass: 'text-xs font-medium',
    },
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: false,
  },
  series: [
    {
      name: 'Attendances',
      data: [2, 4, 6],
      color: '#10b981',
    },
    {
      name: 'Absences',
      data: [1, 0, 4],
      color: '#e11d48',
    },
  ],
  legend: {
    show: true,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: ['8/10/2024', '5/20/2424', '2/5/2625'],
    labels: {
      show: true,
      style: {
        fontFamily: 'Inter, sans-serif',
        cssClass: 'text-xs font-normal',
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
