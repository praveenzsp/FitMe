import React from 'react'

function Footer() {
  return (
    <div className='w-screen bg-black h-auto font-sora px-10'>
      <div className=' pb-6 lg:flex lg:justify-between py-3'>
        <div>
            <h2 className="text-[30px] font-sora font-bold mx-5 md:text-[40px] text-white"><span className="text-purple-500">Fit</span>Me</h2>
            <p className='text-white pb-6'>Fitness For Everyone</p>
        </div>
        <div className='flex justify-center'>
          <div>
            <ul className='text-left px-6'>
              <p className='text-gray-500 my-2'>ABOUT</p>
              <li className='text-white text-sm my-1 font-thin'><a href="#Home">Home</a></li>
              <li className='text-white text-sm my-1 font-thin'><a href="#Trainers">Trainers</a></li>
              <li className='text-white text-sm my-1 font-thin'><a href="#Programs">Programs</a></li>
              <li className='text-white text-sm my-1 font-thin'><a href="#Plans">Memberships</a></li>
              <li className='text-white text-sm my-1 font-thin'><a href="#Testimonials">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <ul className='text-left px-6'>
              <p className='text-gray-500 my-2'>PRODUCT</p>
              <li className='text-white text-sm my-1 font-thin'>How it works?</li>
              <li className='text-white text-sm my-1 font-thin'>Privacy & policy</li>
              <li className='text-white text-sm my-1 font-thin'>Terms & Conditions</li>
              <li className='text-white text-sm my-1 font-thin'>Contact US</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between pt-10 border-t border-gray-500 lg:items-start'>
        <p className='text-gray-500 text-sm'>© 2022, FitMe, Inc. All Rights Reserved.</p>
        <ul className='flex lg:items-start'>
          <li className='text-purple-500 rounded-[50%] text-2xl px-3 py-2'><i className="fa-brands fa-facebook"></i></li>
          <li className='text-purple-500 rounded-[50%] text-2xl px-3 py-2'><i className="fa-brands fa-twitter"></i></li>
          <li className='text-purple-500 rounded-[50%] text-2xl px-3 py-2'><i className="fa-brands fa-youtube"></i></li>
          <li className='text-purple-500 rounded-[50%] text-2xl px-3 py-2'><i className="fa-solid fa-envelope"></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer