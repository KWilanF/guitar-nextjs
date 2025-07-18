
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: "Pacifico, serif" }}>
              Guitara
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/lessons" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Lessons
            </Link>
            <Link href="/chords" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Chord Library
            </Link>
            <Link href="/tuner" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Tuner
            </Link>
            <Link href="/metronome" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Metronome
            </Link>
            <Link href="/progress" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Progress
            </Link>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/lessons" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Lessons
              </Link>
              <Link href="/chords" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Chord Library
              </Link>
              <Link href="/tuner" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Tuner
              </Link>
              <Link href="/metronome" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Metronome
              </Link>
              <Link href="/progress" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Progress
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
