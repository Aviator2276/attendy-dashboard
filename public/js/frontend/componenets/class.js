import { graph, updateChart, deleteChart } from './line-chart.js';
import { getAllDates } from '../../backend/script.js';

const classLineGraphID = 'classLineGraph';

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
        <div class="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-slate-800 dark:text-slate-200 text-xs font-bold mb-2">
            Choose a date:
            </label>
            <div class="relative">
            <select class="block appearance-none w-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-slate-100 focus:dark:bg-slate-900 border border-slate-500">
                ${loadDateOptions()}
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            </div>
        </div>
        <section
        class="h-80 m-2 md:m-4 p-4 text-center border rounded-lg shadow sm:p-8 bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-700"
        >
        ${graph(classLineGraphID, classLineGraphOptions)}
        <div
            class="grid grid-cols-1 items-center border-t border-gray-700 justify-between mt-2.5"
        ></div>
        </section>
    </div>
    `;
};

const loadDateOptions = () => {
  let dateOptions = `<option>All</option>`;
  console.log(getAllDates());
  for (let i in getAllDates()) {
    dateOptions += `<option>${getAllDates()[i]}</option>`;
  }
  return dateOptions;
};

export const loadClassTheme = () => {
  updateChart(classLineGraphID, {
    theme: {
      mode: localStorage.getItem('color-theme'),
      palette: 'palette1',
    },
  });
};

export const updateClassTheme = (method) => {
  //   updateChart(classLineGraphID, {
  //     theme: {
  //       mode: localStorage.getItem('color-theme') === 'light' ? 'dark' : 'light',
  //       palette: 'palette1',
  //     },
  //   });
};

export const offloadClass = () => {
  deleteChart(classLineGraphID);
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
