import React from 'react'
import {motion} from 'framer-motion'



function Plans() {
  return (
    <div id='Plans'
    // initial={{scale:0,opacity:0,x:'250vw'}}
    // whileInView={{scale:1,opacity:1,x:0}}
    // viewport={{once:false,amount:1}}
    // transition={{ type: "spring", duration: 1.2,staggerChildren:0.5}}
    >
        <h2 className='font-sora font-bold text-4xl mt-20 lg:text-5xl'>Ready to Start your <span className='text-purple-500'>Journey?</span></h2>
        <p className='font-sora font-bold text-[17px] my-10'>Bill Monthly <i class="fa-solid fa-toggle-large-on"></i> Bill Yearly</p>
        <div id='plan-card-container' className='flex flex-col justify-center items-center lg:flex lg:justify-evenly lg:flex-row'>

            <motion.div id='plan-card' className='shadow-2xl font-sora w-[300px] lg:w-[350px] p-[20px] flex flex-col justify-center rounded-2xl my-10 mx-3' 
                initial={{opacity:0,x:'-10vw'}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true,amount:0.5}}
                transition={{type:'spring',duration:1.5,ease:'easeOut',delay:0.75,bounce:0.2}}
            >
                <p className='text-purple-500 text-[16px] font font-bold lg:text-[24px]'>Weekly Plan</p>
                <h1 className='text-[30px] font-bold lg:text-[48px]'>$9</h1>
                <p className='text-[12px] text-gray-500 font-semibold lg:text-[16px]'>per week, bill annually</p>
                <div id='checkbox-grp' className='border-t-[1px] border-gray-500 mt-6'>
                    <div className='flex flex-row justify-start my-5 ml-7'><input type='checkbox' checked='true'/><p className='ml-3 font-semibold text-[14px] lg:text-[20px]'>Unlimited gym access</p></div> 
                    <div className='flex flex-row justify-start my-5 ml-7'><input type='checkbox' checked='true'/><p className='ml-3 font-semibold text-[14px] lg:text-[20px]'>1 Training Program</p></div> 
                    <div className='flex flex-row justify-start my-5 ml-7'><input type='checkbox' checked='true'/><p className='ml-3 font-semibold text-[14px] lg:text-[20px]'>Free Wifi</p></div> 
                </div>
                <button className='rounded-3xl border border-purple-500 px-[24px] py-[8px]'>Choose Plan</button>
            </motion.div>

            <motion.div id='plan-card' className='shadow-2xl font-sora w-[300px] lg:w-[350px] p-[20px] flex flex-col justify-center rounded-2xl my-10 mx-3'
                initial={{opacity:0,x:'-10vw'}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true,amount:0.5}}
                transition={{type:'spring',duration:1.5,ease:'easeOut',delay:0.5,bounce:0.2}}
            >
                <p className='text-purple-500 text-[16px] font font-bold lg:text-[24px]'>Monthly Plan</p>
                <h1 className='text-[30px] font-bold lg:text-[48px]'>$49</h1>
                <p className='text-[12px] text-gray-500 font-semibold lg:text-[16px] '>per week, bill annually</p>
                <div id='checkbox-grp' className='border-t-[1px] border-gray-500 mt-6'>
                    <div className='flex flex-row justify-start my-5 ml-7'><input type='checkbox' checked='true'/><p className='ml-3 font-semibold text-[14px] lg:text-[20px]'>Unlimited gym access</p></div> 
                    <div className='flex flex-row justify-start my-5 ml-7'><input type='checkbox' checked='true'/><p className='ml-3 font-semibold text-[14px] lg:text-[20px]'>5 Training Program</p></div> 
                    <div className='flex flex-row justify-start my-5 ml-7'><input type='checkbox' checked='true'/><p className='ml-3 font-semibold text-[14px] lg:text-[20px]'>Adjustable Schedule</p></div> 
                    <div className='flex flex-row justify-start my-5 ml-7'><input type='checkbox' checked='true'/><p className='ml-3 font-semibold text-[14px] lg:text-[20px]'>Free Wifi</p></div> 
                </div>
                <button className='rounded-3xl border border-purple-500 px-[24px] py-[8px]'>Choose Plan</button>
            </motion.div>

            <motion.div id='plan-card' className='shadow-2xl font-sora w-[300px] lg:w-[350px] p-[20px] flex flex-col justify-center rounded-2xl my-10 mx-3'
                initial={{opacity:0,x:'-10vw'}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true,amount:0.5}}
                transition={{type:'spring',duration:1.5,ease:'easeOut',delay:0.25,bounce:0.2}}
            >
                <p className='text-purple-500 text-[16px] font font-bold lg:text-[24px]'>Yearly Plan</p>
                <h1 className='text-[30px] font-bold lg:text-[48px]'>$99</h1>
                <p className='text-[12px] text-gray-500 font-semibold lg:text-[16px]'>per week, bill annually</p>
                <div id='checkbox-grp' className='border-t-[1px] border-gray-500 mt-6'>
                    <div className='flex flex-row justify-start my-5 ml-7'><input type='checkbox' checked='true'/><p className='ml-3 font-semibold text-[14px] lg:text-[20px]'>Unlimited gym access</p></div> 
                    <div className='flex flex-row justify-start my-5 ml-7'><input type='checkbox' checked='true'/><p className='ml-3 font-semibold text-[14px] lg:text-[20px]'>1 Training Program</p></div> 
                    <div className='flex flex-row justify-start my-5 ml-7'><input type='checkbox' checked='true'/><p className='ml-3 font-semibold text-[14px] lg:text-[20px]'>Free Wifi</p></div> 
                </div>
                <button className='rounded-3xl border border-purple-500 px-[24px] py-[8px]'>Choose Plan</button>
            </motion.div>

        </div>
    </div>
  )
}

export default Plans