'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#0066FF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SH</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#0066FF] bg-clip-text text-transparent">
              SkillHub Indonesia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium">
              Beranda
            </Link>
            <Link href="/tentang" className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium">
              Tentang Kami
            </Link>
            <Link href="/kursus" className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium">
              Kursus
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium">
              Blog
            </Link>
            <Link href="/kontak" className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium">
              Kontak
            </Link>
            <Link 
              href="/daftar"
              className="px-6 py-2.5 bg-[#FF6B35] text-white rounded-lg hover:bg-[#ff5722] transition-colors font-medium"
            >
              Daftar Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/tentang" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link 
                href="/kursus" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kursus
              </Link>
              <Link 
                href="/blog" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/kontak" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
              <Link 
                href="/daftar"
                className="mx-4 px-6 py-2.5 bg-[#FF6B35] text-white rounded-lg hover:bg-[#ff5722] transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Daftar Gratis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
