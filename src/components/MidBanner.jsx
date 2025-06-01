import React from 'react';
import banner from '../assets/MidBanner.jpg';
import { motion } from 'framer-motion';

const MidBanner = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        {/* Animated Content */}
        <motion.div
          className="text-center text-white px-4 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="uppercase text-sm tracking-widest text-red-400 mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Limited Edition
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Embrace the Chill in Style
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            The Winter 2024 Collection is here. Iconic silhouettes, bold colors, and premium warmth — made for movement and expression.
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium shadow-md transition-all duration-300"
            >
              Shop Collection
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 border border-white text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MidBanner;
