import React from 'react'

function Yoga() {
  return (
    <div className='font-sora text-center'>
        <h1 className='text-4xl py-10 text-center font-bold'>Yoga & <span className='text-purple-500'>Stretching</span></h1>
        <div className='flex flex-col  items-center lg:flex-row lg:justify-evenly text-left'>
            <div id='item-card' className='p-6  w-[300px] justify-center items-center lg:w-[400px] shadow-2xl rounded-lg my-6 lg:mx-4'>
                <img src='https://fit-me-zeta.vercel.app/images/yoga/wheel-pose.jpg'></img>
                <h1 className='text-[16px] text-purple-500 font-bold'>Chakrasana</h1>
                <p className='text-[14px] text-gray-500'>Offers a deep stretch for the chest and shoulder muscles, as well as the hip flexors. It also strengthens the hamstrings and spinal extensors.</p>
            </div>
            <div id='item-card' className='p-6 w-[300px] justify-center items-center lg:w-[400px] shadow-2xl rounded-lg my-6 lg:mx-4'>
                <img src='https://fit-me-zeta.vercel.app/images/yoga/downward-dog.jpg'></img>
                <h1 className='text-[16px] text-purple-500 font-bold'>Downward Dog</h1>
                <p className='text-[14px] text-gray-500'>Lengthens and decompresses the spine, stretches the hamstrings, strengthens your arms, flushes your brain with fresh oxygen and calms your mind.</p>
            </div>
            <div id='item-card' className='p-6  w-[300px] justify-center items-center lg:w-[400px] shadow-2xl rounded-lg my-6 lg:mx-4'>
                <img src='https://fit-me-zeta.vercel.app/images/yoga/cobra.jpg'></img>
                <h1 className='text-[16px] text-purple-500 font-bold'>Cobra Pose</h1>
                <p className='text-[14px] text-gray-500'>May reduce symptoms of depression, relieve lower back pain, improve self-esteem, reduce inflammation, improve posture.</p>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row lg:justify-evenly text-left'>
            <div id='item-card' className='p-6  w-[300px] justify-center items-center lg:w-[400px] shadow-2xl rounded-lg my-6 lg:mx-4'>
                <img src='https://fit-me-zeta.vercel.app/images/yoga/easy-pose.jpg'></img>
                <h1 className='text-[16px] text-purple-500 font-bold'>Easy Pose</h1>
                <p className='text-[14px] text-gray-500'>It is a hip opener, it is calming, and it eases the menstrual pain for women in addition to lowering the level of anxiety.</p>
            </div>
            <div id='item-card' className='p-6 w-[300px] justify-center items-center lg:w-[400px] shadow-2xl rounded-lg my-6 lg:mx-4'>
                <img src='https://fit-me-zeta.vercel.app/images/yoga/tree-pose.jpg'></img>
                <h1 className='text-[16px] text-purple-500 font-bold'>Tree Pose</h1>
                <p className='text-[14px] text-gray-500'>Stretches your feet, improves balance, strengthens your Core,</p>
            </div>
            <div id='item-card' className='p-6  w-[300px] justify-center items-center lg:w-[400px] shadow-2xl rounded-lg my-6 lg:mx-4'>
                <img src='https://fit-me-zeta.vercel.app/images/yoga/mermaid-pose.jpg'></img>
                <h1 className='text-[16px] text-purple-500 font-bold'>Mermaid Pose</h1>
                <p className='text-[14px] text-gray-500'>This pose also provides a deep stretch to the thighs, groins, shoulders, and chest. It improves mobility in the spine and hips, strengthens the abdominal muscles, and stimulates the organs of the torso.</p>
            </div>
        </div>

    </div>
  )
}

export default Yoga