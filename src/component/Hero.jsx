import { HERO_CONTENT } from "../constant/index (1)"
import profilePic from '../assets/vigneshProfile.png'
import { delay, motion } from "framer-motion"

const container = (delay) =>({
  hidden: {x: -100 , opacity:0},
  visible:{
    x : 0,
    opacity: 1,
    transition:{duration: 0.5 , delay: delay}
  }

})

const Hero = () => {

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap item-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial = 'hidden' 
                    animate = 'visible'
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-7 lg:text-8xl">Vignesh K</motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial = 'hidden' 
                    animate = 'visible'
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">React Developer</motion.span>
                    <motion.p
                    variants={container(1)}
                    initial = 'hidden' 
                    animate = 'visible'
                    className="my-2 max-w-xl py-6 font-normal text-xl tracking-tighter">{HERO_CONTENT}</motion.p>
                    <motion.a
                    variants={container(1.4)}
                    initial = 'hidden' 
                    animate = 'visible'
                    href="https://drive.google.com/file/d/1RPKPTX93fezEfbqy3AWCJq-fzXwMpouV/view" target="blank" className="border border-neutral-600 rounded text-lg mb-4 font-semibold p-2 hover:bg-gradient-to-r from-purple-800 to-purple-600">Check Resume</motion.a>
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                  <motion.img
                  initial = {{x:100 , opacity: 0}}
                  animate = {{x:0 , opacity: 1}}
                  transition={{duration: 1 , delay: 1.2}}
                  className="w-96 rounded-lg" src={profilePic}alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero