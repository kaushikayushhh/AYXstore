import React, { useContext } from 'react';
import { Shopcontext } from '../Context/ShopContext';
import Item from './Item';
import { motion } from 'framer-motion';

const TopSellers = () => {
  const { all_product } = useContext(Shopcontext);

  return (
    <section className="bg-white w-full py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-red-500 uppercase tracking-wider text-sm mb-2 font-medium">
            Customer Favorites
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">
            Top Sellers
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Explore the most loved pieces handpicked by our customers this season. Tried, tested, and trending!
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {all_product.slice(0, 20).map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Item product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopSellers;
