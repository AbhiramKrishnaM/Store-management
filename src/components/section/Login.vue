<script setup>
// Login
</script>
<template>
  <div class="flex justify-center">
    <div class="w-80">
      <div class="mb-10 flex text-lg font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-3"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M255.5 15c-132 0-240 108-240 240s108 240 240 240c85.4 0 160.8-45.2 203.3-112.9a6.87 6.87 0 0 0-9.1-9.7a108.64 108.64 0 0 1-18.4 8.6c-36.8 12.6-57.1 13.1-82.1 12c-27.9-1.2-61.9-10.8-85.8-25s-43.5-34.6-54.1-52.3s-17-39.9-14.1-68.3c2.9-29 29.4-52.6 60.4-52.6c33.5 0 60.8 26.6 60.8 60.1c0 17-8.1 31.7-18.5 43.5c-2.3 2.1-7.6 9.7 5.8 20c15.9 12.2 51.6 18 79.9 16.6s59.1-12.6 80.2-34.8c16.8-17.7 31.8-46.1 31.8-77.4C495.5 97.7 379.5 15 255.5 15Z"
          />
        </svg>
        Blue Reciept
      </div>
      <div>
        <h6 class="mb-3 text-xl">Create your account</h6>
        <h6 class="mb-8 w-64 text-sm">
          Increase ecommerce revenue by 15-30% with conversational commerce
        </h6>
      </div>
      <label
        for="website-admin"
        class="mb-1 flex text-sm font-medium text-gray-900"
        >Email *
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ml-2"
          width="13"
          height="13"
          viewBox="0 0 16 16"
        >
          <path
            fill="#D6DAE0"
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533c.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598c-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081l.082-.381l2.29-.287zM8 5.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2z"
          /></svg
      ></label>

      <div class="flex">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#8E9BB8"
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
            />
          </svg>
        </span>
        <input
          type="email"
          id="website-admin"
          class="block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="name@workmail.com"
        />
      </div>
      <label
        for="website-admin"
        class="mb-1 mt-4 flex text-sm font-medium text-gray-900"
        >Password *
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ml-2"
          width="13"
          height="13"
          viewBox="0 0 16 16"
        >
          <path
            fill="#D6DAE0"
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533c.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598c-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081l.082-.381l2.29-.287zM8 5.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2z"
          /></svg
      ></label>
      <div class="flex">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#8E9BB8"
              d="M21 10h-8.35A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H13l2 2l2-2l2 2l4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3z"
            /></svg
        ></span>
        <input
          type="text"
          id="website-admin"
          class="block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="...."
        />
      </div>
      <div class="mt-5 flex justify-between">
        <div class="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-black"
            >Remember Me</label
          >
        </div>
        <p class="text-sm font-medium text-black">Forget Password</p>
      </div>
      <button
        type="button"
        class="mr-2 mt-5 mb-2 w-full rounded-lg bg-[#191D3A] px-5 py-2.5 text-sm font-medium text-white"
      >
        Login
      </button>
      <button
        type="button"
        class="mr-2 mt-8 mb-2 flex w-full justify-center rounded-lg border border-black px-5 py-2.5 text-sm font-medium text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 256 262"
          class="mr-5"
        >
          <path
            fill="#4285F4"
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
          />
          <path
            fill="#34A853"
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
          />
          <path
            fill="#FBBC05"
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
          />
          <path
            fill="#EB4335"
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
          /></svg
        >Sign in with Google
      </button>
      <p class="mt-4">
        Didn't have an account?<span class="text-blue-700 ml-2">Sign up</span>
      </p>
    </div>
  </div>
</template>
