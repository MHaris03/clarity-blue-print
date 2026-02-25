import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [oracleOpen, setOracleOpen] = useState(false);
  const [selfStudyOpen, setSelfStudyOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/">
          <img
            src='/clarity-blue-print.jpg'
            alt="Clarity Logo"
            className="h-20 w-20"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink to="/" className="hover:text-blue-500 transition">
            Home
          </NavLink>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-500 transition">
              About <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <div className="absolute top-8 left-0 bg-[#111] border border-gray-800 rounded-lg shadow-lg w-56 py-2">
                <NavLink
                  to="/about"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  About Clarity
                </NavLink>
                <NavLink
                  to="/team"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  Our Team
                </NavLink>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-500 transition">
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="absolute top-8 left-0 bg-[#111] border border-gray-800 rounded-lg shadow-lg w-56 py-2">
                <NavLink
                  to="/remembrance-journal"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  Remembrance Transit Journal Companion
                </NavLink>
                <NavLink
                  to="/resonance-mapping"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  Resonance Mapping
                </NavLink>
                <NavLink
                  to="/liberate-voice"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  Liberate Our Voice
                </NavLink>
              </div>
            )}
          </div>

          {/* Oracle Deck Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOracleOpen(true)}
            onMouseLeave={() => setOracleOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-500 transition">
              Oracle Deck <ChevronDown size={16} />
            </button>
            {oracleOpen && (
              <div className="absolute top-8 left-0 bg-[#111] border border-gray-800 rounded-lg shadow-lg w-56 py-2">
                <NavLink
                  to="/oracle-deck"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  Oracle Deck
                </NavLink>
                <NavLink
                  to="/receive-card"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  Receive a Free Card
                </NavLink>
              </div>
            )}
          </div>

          {/* Self-Study Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSelfStudyOpen(true)}
            onMouseLeave={() => setSelfStudyOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-500 transition">
              Self-Study Journey <ChevronDown size={16} />
            </button>
            {selfStudyOpen && (
              <div className="absolute top-8 left-0 bg-[#111] border border-gray-800 rounded-lg shadow-lg w-56 py-2">
                <NavLink
                  to="/journal"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  Journal
                </NavLink>
                <NavLink
                  to="/free-offerings"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  Free Offerings
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="hover:text-blue-500 transition">
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About Clarity</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>The Work</NavLink>
          <NavLink to="/oracle-deck" onClick={() => setIsOpen(false)}>Oracle Deck</NavLink>
          <NavLink to="/receive-card" onClick={() => setIsOpen(false)}>Receive a Free Card</NavLink>
          <NavLink to="/self-study" onClick={() => setIsOpen(false)}>Self Study Journey</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
        </div>
      )}
    </nav>
  );
}