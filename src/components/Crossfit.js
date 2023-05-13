import React from 'react'

function Crossfit() {
  return (
    <div className='font-sora text-center'>
        <h1 className='text-4xl py-10 text-center font-bold'>Cardio & <span className='text-purple-500'>Crossfit</span></h1>
        <div className='flex flex-col  items-center lg:flex-row lg:justify-evenly text-left'>
            <div id='item-card' className='p-6  w-[300px] justify-center items-center lg:w-[400px] shadow-2xl rounded-lg my-6 lg:mx-4'>
                <img src='https://fit-me-zeta.vercel.app/images/cardio/treadmill.png'></img>
                <h1 className='text-[16px] text-purple-500 font-bold'>TREADMILL</h1>
                <p className='text-[14px] text-gray-500'>Running on a treadmill is a great form of aerobic exercise, and regular aerobic exercise helps increase your heart strength and blood circulation throughout your body.</p>
            </div>
            <div id='item-card' className='p-6 w-[300px] justify-center items-center lg:w-[400px] shadow-2xl rounded-lg my-6 lg:mx-4'>
                <img src='https://fit-me-zeta.vercel.app/images/cardio/rowing.png'></img>
                <h1 className='text-[16px] text-purple-500 font-bold'>ROWING MACHINE</h1>
                <p className='text-[14px] text-gray-500'>The rowing machines are designed to simulate the resistance you face. This resistance forces you to work your muscles harder.</p>
            </div>
            <div id='item-card' className='p-6  w-[300px] justify-center items-center lg:w-[400px] shadow-2xl rounded-lg my-6 lg:mx-4'>
                <img src='https://fit-me-zeta.vercel.app/images/cardio/elliptical.png'></img>
                <h1 className='text-[16px] text-purple-500 font-bold'>ELLIPTICAL MACHINE</h1>
                <p className='text-[14px] text-gray-500'>Works the entire body and can engage the quadriceps, hamstrings, glutes, chest, back, triceps and biceps.</p>
            </div>
            <div id='item-card' className='p-6  w-[300px] justify-center items-center lg:w-[400px] shadow-2xl rounded-lg my-6 lg:mx-4'>
                <img src='https://fit-me-zeta.vercel.app/images/cardio/bike.png'></img>
                <h1 className='text-[16px] text-purple-500 font-bold'>STATIONARY BIKE</h1>
                <p className='text-[14px] text-gray-500'>Riding a stationary exercise bike is an efficient and effective way to burn calories and body fat while strengthening your heart, lungs, and muscles.</p>
            </div>
        </div>


    </div>
  )
}

export default Crossfit