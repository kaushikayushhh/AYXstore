import React from 'react'
import { motion } from 'framer-motion'
import banner from '../assets/banner1.jpeg'

const HeroBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative w-full h-[100vh] bg-black'
    >
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${banner})` }}
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' />

      {/* Content */}
      <div className='relative z-10 flex items-center justify-center h-full px-4'>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}

          className='text-center text-white max-w-3xl'
        >
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6'>
            Step Into Style<br />
            <span className='text-red-500'>Redefine Your Wardrobe</span>
          </h1>

           <h1 className='text-6xl md:text-9xl font-extrabold tracking-tight leading-tight mb-6 hover:scale-105 duration-300 '>
            AYX store</h1>
          <p className='text-lg md:text-xl text-gray-200 mb-10'>
            Elevate your everyday look with handpicked collections and timeless fashion. Discover what makes you unique.
          </p>

          {/* Buttons */}
          <div className='flex flex-wrap justify-center gap-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg transition duration-300'
            >
              Explore Collection
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium py-3 px-6 md:py-4 md:px-8 rounded-full transition duration-300 hover:bg-white/20'
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroBanner
