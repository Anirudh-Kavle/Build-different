// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-200 border-b-2 border-black shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo Image */}
            <img src="/esc.jpg" alt="Logo" className="h-8 w-auto" />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            {/* Navigation Links */}
            <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-300">
              home
            </Link>
            <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-300">
              skills
            </Link>
            <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-300">
              experience
            </Link>
            <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-300">
              projects
            </Link>
            <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-300">
              contact
            </Link>
          </div>
          <div className="flex items-center">
            {/* Call to Action Button */}
            <button className="ml-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-600 transition-colors">
              Let&apos;s Work Together!
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}