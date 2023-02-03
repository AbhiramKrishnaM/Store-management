<template>
  <div
    class="w-full flex flex-wrap items-center justify-between mx-auto lg:hidden"
  >
    <a href="https://flowbite.com/" class="flex items-center">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="h-6 mr-3 sm:h-9"
        alt="Flowbite Logo"
      />
      <span class="self-center text-xl font-semibold whitespace-nowrap">
        Flowbite
      </span>
    </a>
    <div class="flex items-center lg:order-2">
      <button
        type="button"
        class="flex mr-3 text-sm bg-gray-800 rounded-full lg:mr-0 focus:ring-4 focus:ring-gray-300"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="w-8 h-8 rounded-full"
          src="@/assets/images/example-test.jpg"
          alt="user photo"
        />
      </button>
      <!-- Dropdown menu -->
      <div
        class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
        id="user-dropdown"
      >
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900">Bonnie Green</span>
          <span class="block text-sm font-medium text-gray-500 truncate"
            >name@flowbite.com</span
          >
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >Dashboard</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >Earnings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >Sign out</a
            >
          </li>
        </ul>
      </div>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul
        class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white"
      >
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0"
            aria-current="page"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0"
            >About</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0"
            >Services</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0"
            >Pricing</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
