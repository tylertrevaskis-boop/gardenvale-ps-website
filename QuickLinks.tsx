import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed w-full top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-serif text-lg font-bold">
            G
          </div>
          <span className="font-serif font-bold text-navy text-lg hidden sm:inline">GARDENVALE PRIMARY</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-navy transition font-medium text-sm">Home</a>
          <a href="#about" className="text-gray-700 hover:text-navy transition font-medium text-sm">About</a>
          <a href="#learning" className="text-gray-700 hover:text-navy transition font-medium text-sm">Learning</a>
          <a href="#wellbeing" className="text-gray-700 hover:text-navy transition font-medium text-sm">Wellbeing</a>
          <a href="#community" className="text-gray-700 hover:text-navy transition font-medium text-sm">Community</a>
          <a href="#news" className="text-gray-700 hover:text-navy transition font-medium text-sm">News</a>
          <a href="#contact" className="text-gray-700 hover:text-navy transition font-medium text-sm">Contact</a>
        </div>

        {/* Enrol Button */}
        <button className="btn-primary text-sm">Enrol now</button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-navy">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
