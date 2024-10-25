import { graph, updateChart, deleteChart } from './line-chart.js';
import { getDateChartData } from '../../backend/script.js';

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
  setTimeout(() => {
    updateHomeCharts();
    document.getElementById('loaderIcon').remove();
    // for (let i = 0; i >= 7; i++) {
    //   if (Object.values(getDateChartData().date) == undefined) {
    //     setTimeout(() => {
    //       updateHomeCharts();
    //       console.log(`Unable to retrieve, trying again. Try: ${i}`);
    //     }, 1000);
    //   } else {
    //     break;
    //   }
    // }
  }, 500);
  return `
  <section
    class="h-80 m-2 md:m-4 p-4 text-center border rounded-lg shadow sm:p-8 bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-700"
    >
    <div id="loaderIcon" class="pointer-events-none flex right-0 left-0 top-0 bottom-0 items-center px-2 text-slate-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 101" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 me-1.5 animate-spin ml-auto mr-auto text-slate-200 dark:text-slate-800 fill-emerald-700 dark:fill-emerald-400">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
    </div>
    ${graph(homeLineGraphID, homeLineGraphOptions)}
  </section>`;
};

export const updateHomeCharts = () => {
  updateChart(homeLineGraphID, {
    xaxis: {
      categories: Object.values(getDateChartData().date),
    },
    series: [
      {
        name: 'Attendances',
        data: Object.values(getDateChartData().membersPresent),
        color: '#10b981',
      },
      {
        name: 'Absences',
        data: Object.values(getDateChartData().membersAbsent),
        color: '#e11d48',
      },
    ],
  });
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
      data: [],
      color: '#10b981',
    },
    {
      name: 'Absences',
      data: [],
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
    categories: [],
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
