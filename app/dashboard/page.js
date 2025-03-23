import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

function page() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="h-1/5 w-full flex justify-center items-center gap-5 pattern shadow-2xl z-10">
        <div class="w-full md:w-34 px-3">
          <label
            class="block text-sm/6 font-bold text-oxfordBlue"
            for="grid-state"
          >
            Type
          </label>
          <div class="relative mt-2">
            <select
              class="block appearance-none w-full bg-viridian/10 backdrop-blur-xs backdrop-filter shadow-lg border border-viridian text-oxfordBlue py-2 px-4 rounded-2xl leading-tight focus:outline-none focus:bg-alabaster focus:border-gray-500"
              id="grid-state"
            >
              <option>Income</option>
              <option>Expense</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-oxfordBlue">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm/6 font-bold text-oxfordBlue "
          >
            Income
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-2xl bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                $
              </div>
              <input
                id="price"
                name="price"
                type="text"
                placeholder="0.00"
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="currency"
                  name="currency"
                  aria-label="Currency"
                  className="col-start-1 row-start-1 w-full appearance-none  pr-7 pl-3 text-base  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 bg-alabaster shadow-lg  text-oxfordBlue py-2 px-4 rounded-2xl leading-tight focus:outline-none focus:bg-alabaster focus:border-gray-500"
                >
                  <option>Food</option>
                  <option>invoices</option>
                  <option>Entertainment</option>
                  <option>Other</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="rounded-2xl py-2 px-8 flex justify-center items-center bg-viridian/10 backdrop-blur-xs backdrop-filter shadow-lg border border-viridian text-oxfordBlue leading-tight focus:outline-none focus:bg-alabaster focus:border-gray-500 mt-8 hover:cursor-pointer">
          Add
        </button>
      </div>
      <div className="h-4/5 w-full bg-alabaster flex justify-center items-center">
        b
      </div>
    </div>
  );
}

export default page;
