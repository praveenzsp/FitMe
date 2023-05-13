import React from 'react'
import {motion} from 'framer-motion'

function Home() {
  return (
    <motion.div id='Home' className={`flex flex-col-reverse lg:flex lg:justify-center lg:flex-row lg:mx-10 lg:my-20 lg:items-center font-sora`}
    // initial={{x:'-250vw',opacity:0}}
    // animate={{x:0,opacity:1}}
    // transition={{delay:0.1,type:'spring',}}
    >

        <motion.div className='lg:w-1/2 lg:mx-6'
          // animate={{rotate:[0,30,30,0]}}
          initial={{x:'-50vw',opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{type:'spring',duration:1.5}}
        >
            <h2 className={`text-3xl font-extrabold font-sora text-center mx-6 my-3 lg:text-left lg:text-6xl`}>Smart <span className={`text-purple-500 `}>Fitness</span> experience for everyone.</h2>
            <p className={`text-xs text-gray-500 font-sora text-center mx-6 my-3 lg:text-left lg:text-xl`}>Fitness is not a destination it is a lifestyle. With our professional trainers we will help you to build the greatest version of yourself.</p>
            <div className={`flex flex-col text-center my-6 lg:flex-row lg:justify-start`}>
              <button className={'bg-purple-500 text-white rounded-[40px] px-10 mx-1 lg:mx-0 py-1 mb-6 lg:mb-0 lg:ml-6'}>Get Started</button>
            <button className={'bg-white  rounded-[40px] px-10 py-1'}><i className={"fa-solid fa-circle-play text-purple-500"}></i> Watch Video</button>
            </div>
        </motion.div>


        <motion.div className='lg:w-1/2 lg:mx-6 lg:top-0'
        // animate={{rotate:[0,30,30,0]}}
        initial={{x:'50vw',opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{type:'spring',duration:1.5}}
        
        >
                <img  className='' src='https://fit-me-zeta.vercel.app/images/hero.svg'></img>
        </motion.div>

    </motion.div>
  )
}

export default Home