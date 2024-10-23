export const peopleView = () => {
  return peopleHeader() + peopleContent();
};

const peopleHeader = () => {
  return `
    <header class="shadow">
        <div class="mx-auto px-4 md:max-w-6xl py-6 md:px-6 lg:px-8">
        <h1
            class="m-2 md:m-4 text-4xl font-bold text-slate-800 dark:text-slate-200"
        >
            Welcome, Admin
        </h1>
        <p class="m-2 md:m-4 text-1xl text-slate-800 dark:text-slate-200">
            People Page
        </p>
        </div>
    </header>
    `;
};

const peopleContent = () => {
  return `
    <div class="mx-auto px-4 md:max-w-6xl py-6 md:px-6 lg:px-8">
    <section
    class="m-2 md:m-4 p-4 text-center border rounded-lg shadow sm:p-8 bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-700"
    >
    <p
        class="mb-2 text-3xl font-bold py-2 text-slate-800 dark:text-slate-200"
    >
        Primary Container
    </p>
    <p class="text-md text-slate-800 dark:text-slate-200">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
        quas quae alias mollitia sint atque voluptate eius qui unde! Quas.
    </p>
    </section>
    `;
};
