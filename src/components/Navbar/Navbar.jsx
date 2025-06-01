import React, { useContext, useState } from 'react'
import Logo from '../../assets/ayx.png'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi"
import ResponsiveMenu from './ResponsiveMenu'
import { Shopcontext } from '../../Context/ShopContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { getTotalCartItems } = useContext(Shopcontext)

  const toggleMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='bg-black/40 px-4 fixed w-full z-50 shadow-sm top-0 backdrop-blur-md'
    >
      <div className='max-w-7xl mx-auto  px-5 flex items-center justify-between'>
        
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Link to='/'>
            <motion.img 
              src={Logo} 
              alt="logo" 
              className='md:w-24 w-20'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>
        </div>

        {/* Center Nav Links */}
        <nav className='hidden md:flex flex-1 justify-center'>
          <ul className='flex items-center font-semibold text-white text-lg gap-8'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/mens'><li>Mens</li></Link>
            <Link to='/womens'><li>Womens</li></Link>
            <Link to='/kids'><li>Kids</li></Link>
          </ul>
        </nav>

        {/* Right side: login + cart + menu */}
        <div className='flex items-center gap-4'>
          <Link to='/login'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-red-500 text-white px-4 py-1 rounded-md'
            >
              Login
            </motion.button>
          </Link>

          <Link to='/cart' className='relative w-10 text-white'>
            <ShoppingCart />
            <motion.div
              className='bg-red-500 w-5 h-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white text-xs'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260 }}
            >
              {getTotalCartItems()}
            </motion.div>
          </Link>

          {/* Mobile hamburger icon */}
          <div className='md:hidden text-white'>
            <AnimatePresence mode='wait'>
              {showMenu ? (
                <motion.div
                  key="menuClose"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer' size={30} />
                </motion.div>
              ) : (
                <motion.div
                  key="menuOpen"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer' size={30} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile responsive menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
