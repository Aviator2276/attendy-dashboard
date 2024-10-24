import { graph, updateChart, deleteChart } from './line-chart.js';

const classLineGraph = 'classLineGraph';

export const classView = () => {
  return classHeader() + classContent();
};

const classHeader = () => {
  return `
    <header class="shadow">
        <div class="mx-auto px-4 md:max-w-6xl py-6 md:px-6 lg:px-8">
        <h1
            class="m-2 md:m-4 text-4xl font-bold text-slate-800 dark:text-slate-200"
        >
            Welcome, Admin
        </h1>
        <p class="m-2 md:m-4 text-1xl text-slate-800 dark:text-slate-200">
            Overview of your class's attendance.
        </p>
        </div>
    </header>
    `;
};

const classContent = () => {
  return `
    <div class="mx-auto px-4 md:max-w-6xl py-6 md:px-6 lg:px-8">
        <section
        class="h-80 m-2 md:m-4 p-4 text-center border rounded-lg shadow sm:p-8 bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-700"
        >
        ${graph(classLineGraph, classLineGraphOptions)}
        <div
            class="grid grid-cols-1 items-center border-t border-gray-700 justify-between mt-2.5"
        ></div>
        </section>
    </div>
    `;
};

export const loadClassTheme = () => {
  updateChart(classLineGraph, {
    theme: {
      mode: localStorage.getItem('color-theme'),
      palette: 'palette1',
    },
  });
};

export const updateClassTheme = () => {
  updateChart(classLineGraph, {
    theme: {
      mode: localStorage.getItem('color-theme') === 'light' ? 'dark' : 'light',
      palette: 'palette1',
    },
  });
};

export const offloadClass = () => {
  deleteChart(classLineGraph);
};

const classLineGraphOptions = {
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
    labels: {
      formatter: (value) => value.toFixed(0) + '%',
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
      data: [20, 80, 35, 35, 75],
      color: '#10b981',
    },
    {
      name: 'Absences',
      data: [80, 20, 65, 65, 25],
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
    categories: [
      '8/10/2024',
      '5/20/2424',
      '2/5/2625',
      '2/14/3403',
      '4/25/3262',
    ],
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
    max: 100,
    labels: {
      formatter: (value) => value.toFixed(0) + '%',
    },
    show: false,
  },
  clip: true,
};
