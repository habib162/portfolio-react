import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home', hasDropdown: true },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog', hasDropdown: true },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="badge">
                <rect width="44" height="44" />
              </clipPath>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.2" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Dark base */}
            <rect width="44" height="44" fill="#0B1121" />

            {/* Diagonal accent split — left green half */}
            <g clipPath="url(#badge)">
              <polygon points="0,0 26,0 16,44 0,44" fill="#4DFFA4" />
            </g>

            {/* Subtle white divider line on the diagonal */}
            <g clipPath="url(#badge)">
              <line x1="26" y1="0" x2="16" y2="44" stroke="white" strokeWidth="1" opacity="0.15" />
            </g>

            {/* H — left bar: dark on green bg */}
            <rect x="8" y="10" width="5.5" height="24" rx="1.5" fill="#0B1121" filter="url(#glow)" />

            {/* H — right bar: accent on dark bg */}
            <rect x="30.5" y="10" width="5.5" height="24" rx="1.5" fill="#4DFFA4" filter="url(#glow)" />

            {/* H — crossbar: white for max contrast */}
            <rect x="13.5" y="19.5" width="17" height="5" rx="1.5" fill="white" opacity="0.95" />

            {/* Outer border */}
            <rect x="1" y="1" width="42" height="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          </svg>

          {/* Wordmark */}
          <span className="text-white font-black text-xl tracking-[0.2em] uppercase
                           group-hover:text-accent transition-colors duration-300">
            HABIB
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href, hasDropdown }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setActive(label)}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                  active === label ? 'text-accent' : 'text-white hover:text-accent'
                }`}
              >
                {label}
                {hasDropdown && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 bg-accent flex items-center justify-center text-dark"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1a2d] border-t border-white/5 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => { setActive(label); setMenuOpen(false) }}
                  className={`block text-sm font-medium tracking-wide transition-colors ${
                    active === label ? 'text-accent' : 'text-white hover:text-accent'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
