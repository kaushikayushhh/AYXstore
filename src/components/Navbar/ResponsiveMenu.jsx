import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  hidden: { x: '-100%' },
  visible: { x: 0 },
  exit: { x: '-100%' },
};

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 top-0 left-0 z-20 flex h-screen w-[50%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md"
        >
          <div>
            <div className='flex items-center justify-start gap-3'>
              <FaUserCircle size={50} />
              <div>
                <h1>Hello User</h1>
                <h1 className='text-sm text-slate-500'>Premium User</h1>
              </div>
            </div>
            <nav className='mt-12'>
              <ul className='flex flex-col space-y-4 text-xl'>
                <Link to='/'><li onClick={() => setShowMenu(false)}>Home</li></Link>
                <Link to='/mens'><li onClick={() => setShowMenu(false)}>Mens</li></Link>
                <Link to='/womens'><li onClick={() => setShowMenu(false)}>Womens</li></Link>
                <Link to='/kids'><li onClick={() => setShowMenu(false)}>Kids</li></Link>
                <Link to='/login'>
                  <button onClick={() => setShowMenu(false)} className='bg-red-500 text-white px-4 py-1 rounded-md'>Login</button>
                </Link>
              </ul>
            </nav>
          </div>
          <div className=''>
            <h1>
              Made by Ayush Kaushik
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu
