export const navbarDisplay = (page) => {
  console.log('running');
  return `
    <div
          class="h-full overflow-y-hidden px-2 py-4 bg-emerald-700 flex flex-col"
        >
          <ul class="space-y-2 font-medium">
            <li>
              <a
                id="homeLink"
                href="#"
                class="flex items-center rounded-lg p-2 text-slate-200 ${
                  page === 'home' ? 'bg-emerald-800' : 'hover:bg-emerald-600'
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="1.25"
                  stroke="currentColor"
                  class="h-8 w-8 transition duration-75 text-slate-100 ${
                    page === 'home' ? '' : 'group-hover:text-slate-100'
                  }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span
                  class="flex-1 ms-4 whitespace-nowrap navbar-text transition-all"
                  >Home</span
                >
              </a>
            </li>
            <li>
              <a
                id="classLink"
                href="#"
                class="flex items-center rounded-lg p-2 text-slate-200 ${
                  page === 'class' ? 'bg-emerald-800' : 'hover:bg-emerald-600'
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="1.25"
                  stroke="currentColor"
                  class="h-8 w-8 transition duration-75 text-slate-300" ${
                    page === 'class' ? '' : 'group-hover:text-slate-100'
                  }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>

                <span
                  class="flex-1 ms-4 whitespace-nowrap navbar-text transition-all"
                  >Class</span
                >
              </a>
            </li>
            <li>
              <a
                id="peopleLink"
                href="#"
                class="flex items-center rounded-lg p-2  text-slate-200 ${
                  page === 'people' ? 'bg-emerald-800' : 'hover:bg-emerald-600'
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="1.25"
                  stroke="currentColor"
                  class="h-8 w-8 transition duration-75 text-slate-300 ${
                    page === 'people' ? '' : 'group-hover:text-slate-100'
                  }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span
                  class="flex-1 ms-4 whitespace-nowrap navbar-text transition-all"
                  >People</span
                >
              </a>
            </li>
          </ul>
          <ul
            id="navbarQuickAction"
            class="relative space-y-2 h-12 mb-2 left-0 right-0 mt-auto flex flex-row flex-wrap justify-around items-end transition-all"
          >
            <li>
              <button
                type="button"
                id="darkModeSwitch"
                class="rounded-lg p-2 bg-emerald-800 hover:bg-emerald-600 text-slate-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="darkModeIcon"
                  fill="none"
                  stroke-width="1.25"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 mx-auto transition-all group-hover:text-slate-100 text-slate-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                id="navbarMinimize"
                class="rounded-lg p-2 bg-emerald-800 hover:bg-emerald-600 text-slate-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="navbarArrow"
                  fill="none"
                  stroke-width="1.25"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 mx-auto transition-transform -scale-100 group-hover:text-slate-100 text-slate-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
    `;
};
