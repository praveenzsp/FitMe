import React from 'react'
import {motion} from 'framer-motion'

function Trainers() {
  return (
    <div id='Trainers'>
        <h2 className='font-sora font-bold text-[30px] lg:my-30 my-10 lg:text-5xl'>Meet Our Certified <span className='text-purple-500'>Trainers</span></h2>
        <div className='lg:flex lg:justify-evenly'>
            <motion.div className='mb-20'
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true,amount:0.5}}
                transition={{type:'spring',duration:2.5,delay:0.7,ease:'easeOut',bounce:0.5}}
            >
                <img className='h-[300px] mx-auto my-6 lg:h-[350px]' src='https://fit-me-zeta.vercel.app/images/trainer.svg'/>
                <div className='text-center font-sora'>
                    <h3 className='text-xl font-bold'>Alex Graham</h3>
                    <p className='text-lg text-gray-500'>MMA Trainer</p>
                </div>
            </motion.div>

            <motion.div className='mb-20'
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             viewport={{once:true,amount:0.5}}
             transition={{type:'spring',duration:2.5,delay:0.3,ease:'easeOut',bounce:0.5}}   
            >
                <img className='h-[300px] mx-auto my-6 lg:h-[400px]' src='/trainer-2.png'/>
                <div className='text-center font-sora'>
                    <h3 className='text-xl font-bold'>Sebastian Smith</h3>
                    <p className='text-lg text-gray-500'>Gym Trainer</p>
                </div>
            </motion.div>

            <motion.div className='mb-20'
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true,amount:0.5}}
                transition={{type:'spring',duration:2.5,delay:0.7,ease:'easeOut',bounce:0.5}}
            >
                <img className='h-[300px] mx-auto my-6 lg:h-[350px]' src='https://fit-me-zeta.vercel.app/images/trainer3.svg'/>
                <div className='text-center font-sora'>
                    <h3 className='text-xl font-bold'>Matt Damon</h3>
                    <p className='text-lg text-gray-500'>Yoga Trainer</p>
                </div>
            </motion.div>
        </div>
        <button className='bg-purple-500 text-white font-sora font-semibold rounded-3xl px-32 py-1 text-center mb-6 -mt-3 lg:px-16 lg:py-3'>See All</button>
    </div>
  )
}

export default Trainers