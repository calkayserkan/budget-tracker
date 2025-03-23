import React from 'react'

function User() {
  return (
    <div className="relative h-24 w-screen flex flex-col justify-center items-center text-black user-pattern mb-10">
      <div className="absolute bottom-[-36] h-18 w-full  sm:w-lg md:w-xl lg:w-2xl xl:w-3xl rounded-2xl border border-gray-100 bg-viridian/10 backdrop-blur-xs backdrop-filter shadow-lg">
        <div className="h-full w-full flex justify-center items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-15 text-oxfordBlue"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-3xl text-oxfordBlue font-bold">Serkan Çalkay</p>
        </div>
      </div>
    </div>
  )
}

export default User