"use client";
import Link from "next/link";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold">
              MyWebSite
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-1 pb-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
