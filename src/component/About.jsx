import React from 'react'
import AboutImg from '../assets/AboutMe.png'
import { ABOUT_TEXT } from '../constant/index (1)'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
        <div className='flex flex-wrap'>
            <motion.div
            whileInView = {{opactiy: 1 , x : 0}}
            initial = {{opactiy: 0 , x: -100}}
            transition = {{duration: 0.5}}  
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='w-96 rounded-lg' src={AboutImg} alt="" />
                </div>
            </motion.div>
            <motion.div 
             whileInView = {{opactiy: 1 , x : 0}}
             initial = {{opactiy: 0 , x: 100}}
             transition = {{duration: 0.5}} 
            className='w-full lg:w-1/2'>
                <div className='flex justfy-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6 font-normal text-xl'>
                        {ABOUT_TEXT}
                    </p>
                </div>
                <a href="" className="border border-neutral-600 rounded text-lg font-semibold p-2 hover:bg-gradient-to-r from-purple-800 to-purple-600">Know More</a>
            </motion.div>
        </div>
    </div>
  )
}

export default About