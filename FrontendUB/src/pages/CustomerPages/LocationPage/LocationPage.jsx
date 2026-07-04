import React from 'react'
import MainBranchContact from './Components/MainBranchContact'
import SubBranchContact from './Components/SubBranchContact'

import CustomerNavbar from '../Components/CustomerNavbar'
import Footer from '../Components/Footer'
import MAINUB from '../../../assets/images/UB-main-branch.png'
import SecondUB from '../../../assets/images/UB-payatas-branch.png'

function LocationPage({ cartData }) {
  return (
    <>
      <div className='bg-zinc-950 min-h-screen flex flex-col w-full'>
        {/* Import the Header here*/}
        <CustomerNavbar cartData={cartData}/>

        <div className='max-w-7xl mx-auto px-4 py-6 flex-grow w-full'>
          <div className='flex flex-col justify-center'>

            <h1 className="text-white text-[40px] md:text-[8vw] xl:text-[5.5vw] 2xl:text-[5.5vw] mb-4 md:mb-8 leading-[1.2] text-center text-balance">
              Visit our <span className='text-red-500'>Main</span> Branch
            </h1>
            {/* THE LUXURY DARK MODE IMAGE LAYOUT */}
            <img
              src={MAINUB}
              alt="Ultimate Burger Main Branch"
              className='w-full max-w-5xl mx-auto aspect-video object-cover rounded-3xl shadow-2xl shadow-black/80 border border-white/10 hover:scale-105 transition-transform duration-500'
            />
          </div>

          {/* Main branch Contact Details*/}
          <MainBranchContact />

          {/* Sub branch */}
          <SubBranchContact/>


        </div>

        


        {/* Import the Footer here*/}
        <Footer />

      </div>
    </>
  )
}

export default LocationPage