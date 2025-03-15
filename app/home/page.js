import React from 'react'
import User from '../components/home/User'
import Summary from '../components/home/Summary'
import Categories from '../components/home/Categories'
function page() {
  return (
    <div className='flex flex-col w-screen min-h-screen justify-start items-center text-black gap-15 bg-stone-100'>
        <User/>
        <Summary/>
        <Categories/>
    </div>
  )
}

export default page