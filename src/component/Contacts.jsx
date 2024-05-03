import React from 'react'
import { CONTACT } from '../constant/index (1)'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

import {motion} from 'framer-motion'


const Contacts = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 1 , y: -100}}
        transition={{duration:0.5}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <div className='flex items-center justify-center gap-4 text-2xl mb-5'>
        <a href="https://www.linkedin.com/in/vigneshk2k/" target='blank'><FaLinkedin/></a>
        <FaInstagram/>
        <FaWhatsappSquare/>
        </div>
        <div className='text-center tracking-tighter'>
            <motion.p
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 1 , x: -100}}
            transition={{duration:1}}
            >{CONTACT.address}</motion.p>
            <motion.p
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 1 , x: 100}}
            transition={{duration:1.5}}
            >{CONTACT.phoneNo}</motion.p>
            <motion.a 
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 1 , x: -100}}
            transition={{duration:2}}
            href="">{CONTACT.email}</motion.a>
        </div>
    </div>
  )
}

export default Contacts