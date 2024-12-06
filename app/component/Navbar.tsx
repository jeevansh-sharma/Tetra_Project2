import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-neutral-900 text-white shadow-zinc-950 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-10">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <Link href="/" className="text-2xl font-bold text-indigo-500">
              MyBrand
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 mr-28 items-center">
            <Link href="/" className="hover:text-indigo-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-indigo-400 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-indigo-400 transition">
              Services
            </Link>
            <Link href="/contact" className="hover:text-indigo-400 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {/* Add your menu icon here */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Shadow at the bottom */}
    
    </nav>
  );
}
