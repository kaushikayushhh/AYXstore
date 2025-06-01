import React, { useContext } from 'react';
import { Shopcontext } from '../Context/ShopContext';
import Item from './Item';
import { motion } from 'framer-motion';

const NewCollection = () => {
  const { new_collections } = useContext(Shopcontext);

  return (
    <section className="bg-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">
            New Collection
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Discover the freshest fashion picks curated just for you. Elevate your style with our newest arrivals.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {new_collections.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg shadow hover:shadow-xl transition-shadow bg-white"
            >
              <Item product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewCollection;
