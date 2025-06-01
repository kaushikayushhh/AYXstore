import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ayx.png';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-36 mb-4" />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            High-quality, sustainable clothing at affordable prices.
          </p>
          <p className="mt-2 text-sm text-gray-400">Tulip Lemon , Sector 69 , Gurugram</p>
          <p className="text-sm text-gray-400">Email: kaushik.ak8171@gmail.com</p>
          <p className="text-sm text-gray-400">Phone: +91 8273986787</p>
        </motion.div>

        {/* Customer Service */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-white">Customer Service</h3>
          <ul className="text-sm space-y-2 text-gray-400">
            {['Contact Us', 'Shipping & Returns', 'FAQs', 'Order Tracking', 'Size Guide'].map(
              (item, i) => (
                <li key={i} className="hover:text-white transition cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-2xl mt-2 text-gray-400">
            <FaFacebook className="hover:text-blue-500 transition" />
            <FaInstagram className="hover:text-pink-500 transition" />
            <FaTwitterSquare className="hover:text-sky-400 transition" />
            <FaPinterest className="hover:text-red-600 transition" />
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-white">Stay in the Loop</h3>
          <p className="text-sm text-gray-400">
            Subscribe to get special offers, free giveaways, and more.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-r-md text-white font-medium text-sm"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.9 }}
      >
        &copy; {new Date().getFullYear()} <span className="text-red-500 font-semibold">AYXstore</span>. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
