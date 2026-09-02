// formkit.config.ts
import { defineFormKitConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

const classes = generateClasses({
  global: {
    outer: '$reset group w-full min-w-0 mb-5 text-base data-[disabled]:opacity-50 data-[disabled]:pointer-events-none',
    label: '$reset block mb-2 text-sm font-medium text-gray-900 dark:text-white',
    messages: '$reset list-none p-0 mt-1 mb-0',
    message: '$reset text-red-500 text-xs italic',
  },
  'family:text': {
    inner: '$reset flex items-center w-full p-2 rounded-lg border border-gray-300 bg-gray-50 shadow-sm focus-within:ring-1 focus-within:border-blue-500 focus-within:ring-blue-500 dark:bg-gray-700 dark:border-gray-600',
    input: '$reset appearance-none bg-transparent border-none text-gray-900 dark:text-white text-sm block w-full p-0 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400',
  },
  'family:button': {
    input: '$reset inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:opacity-50 group-data-[loading=true]/form:before:content-[""] group-data-[loading=true]/form:before:block group-data-[loading=true]/form:before:animate-spin group-data-[loading=true]/form:before:w-5 group-data-[loading=true]/form:before:h-5 group-data-[loading=true]/form:before:rounded-full group-data-[loading=true]/form:before:mr-3 group-data-[loading=true]/form:before:-ml-1.5 group-data-[loading=true]/form:before:border-2 group-data-[loading=true]/form:before:border-solid group-data-[loading=true]/form:before:border-white group-data-[loading=true]/form:before:border-r-transparent',
  },
  'textarea': {
    inner: '$reset flex items-center w-full p-2 rounded-lg border border-gray-300 bg-gray-50 shadow-sm focus-within:ring-1 focus-within:border-blue-500 focus-within:ring-blue-500 dark:bg-gray-700 dark:border-gray-600',
    input: '$reset appearance-none bg-transparent border-none text-gray-900 dark:text-white text-sm block w-full p-0 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 h-20',
  },
})

export default defineFormKitConfig({
  config: {
    classes,
  },
})