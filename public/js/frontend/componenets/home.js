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
            Home Page
        </p>
        </div>
    </header>
    `;
};

const homeContent = () => {
  return `
    <div class="mx-auto px-4 md:max-w-6xl py-6 md:px-6 lg:px-8">
        <section
        class="m-2 md:m-4 p-4 text-center border rounded-lg shadow sm:p-8 bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-700 animate-pulse"
        id="teamMainDisplay"
        >
        <section>Loading Data</section>
        <div id="home-line-chart" class="overflow-visible"></div>
        <div
            class="grid grid-cols-1 items-center border-t border-gray-700 justify-between mt-2.5"
        ></div>
        </section>
    </div>
    `;
};
