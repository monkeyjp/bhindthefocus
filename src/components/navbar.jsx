import React, { useState } from 'react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <nav className="bg-white sticky top-0 z-30 shadow-xl" >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex-shrink-0 flex items-center">

              <img src="src/assets/logo/Logo2.png" alt="" className='h-12 p-0 m-0' />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="text-black-300 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-black-300 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
                <a href="#" className="text-black-300 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-sm font-medium">My Shop</a>
                <a href="#" className="text-black-300 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
              <button type="button" onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:bg-white-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <svg className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block text-black-300 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="block text-black-300 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
            <a href="#" className="block text-black-300 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-base font-medium">My Shop</a>
            <a href="#" className="block text-black-300 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar