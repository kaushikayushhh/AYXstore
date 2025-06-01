import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const banners = [
  {
    title: 'Season Sale',
    subtitle: 'Up to 70% Off',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
    button: 'Shop Now',
    bg: 'bg-yellow-700/80',
    span: 'col-span-2',
  },
  {
    title: 'Trending Picks',
    subtitle: 'Curated for You',
    image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600',
    button: 'Explore',
    bg: 'bg-orange-800/80',
    span: 'col-span-2',
  },
  {
    title: 'New Arrivals',
    subtitle: 'Latest Styles',
    image: 'https://images.pexels.com/photos/6051248/pexels-photo-6051248.jpeg?auto=compress&cs=tinysrgb&w=600',
    button: 'Discover',
    bg: 'bg-black/70',
  },
  {
    title: 'Flash Deals',
    subtitle: 'Time-Sensitive Offers',
    image: 'https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=600',
    button: 'Grab Now',
    bg: 'bg-blue-900/80',
  },
  {
    title: 'Limited Offer',
    subtitle: 'Exclusive Today',
    image: 'https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&w=600',
    button: 'See More',
    bg: 'bg-red-800/80',
  },
  {
    title: 'Editor’s Picks',
    subtitle: 'Handpicked Selections',
    image: 'https://images.pexels.com/photos/4210857/pexels-photo-4210857.jpeg?auto=compress&cs=tinysrgb&w=600',
    button: 'Browse',
    bg: 'bg-gray-900/80',
  },
];

const MultiBanner = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {banners.map((banner, idx) => (
          <motion.div
            key={idx}
            className={`relative h-[260px] rounded-xl overflow-hidden ${banner.span || ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div
              className={`absolute inset-0 ${banner.bg} text-white flex flex-col justify-center items-start p-6`}
            >
              <h2 className="text-2xl font-bold">{banner.title}</h2>
              <p className="text-sm mt-1">{banner.subtitle}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
              >
                {banner.button} <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MultiBanner;
