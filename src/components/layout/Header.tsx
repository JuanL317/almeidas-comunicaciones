'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import HamburgerButton from '../ui/HamburgerButton'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname();

  // Cierra el menú móvil automáticamente al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/ALMEIDAS LOGO FINAL.png"
                alt="Logo Almeidas Comunicaciones"
                width={48}
                height={48}
                className="rounded-lg bg-white"
                priority
              />
              <div className="ml-2 flex flex-col leading-tight">
                <span className="text-lg sm:text-xl font-extrabold uppercase bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent tracking-widest drop-shadow">
                  ALMEIDAS
                </span>
                <span className="flex items-center text-xs sm:text-sm font-semibold text-green-600 tracking-wider uppercase">
                  COMUNICACIONES
                  <span className="ml-1 font-bold uppercase bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">SAS</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="/servicios" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Servicios
            </Link>
            <Link 
              href="/nosotros" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Nosotros
            </Link>
            <Link 
              href="/contacto" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contacto
            </Link>
            <Link 
              href="/pqrs" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              PQRS
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <HamburgerButton open={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <Link 
                  href="#inicio" 
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link 
                  href="/servicios" 
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link 
                  href="/nosotros" 
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nosotros
                </Link>
                <Link 
                  href="/contacto" 
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
                <Link 
                  href="/pqrs" 
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PQRS
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header 