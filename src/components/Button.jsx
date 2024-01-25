import React from 'react'
import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.button
        type="button"
        className="button relative h-20 sm:h-24 md:h-28 lg:h-32 px-10 rounded-[4rem] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold border-2 border-[#A374FF] transition-all ease-in-out duration-300 overflow-hidden text-center hover:border-0"
      >  
        <motion.span
          data-text="Discover more of our work"
          className="flex items-center transition-all ease-in-out relative top-0 h-full duration-300"
        >
          Discover more of our work
        </motion.span>  
      </motion.button>
  )
}

export default Button