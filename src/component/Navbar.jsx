import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='text-2xl font-bold'>Portfolio</h1>
        </div>
        
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
         <a href="https://www.linkedin.com/in/vigneshk2k/" target='blank'><FaLinkedin/></a>
         <a href="https://github.com/vigneshoffl" target='blank'><FaGithub/></a>
         <FaInstagram/>   
        </div>
    </nav>
  )
}

export default Navbar