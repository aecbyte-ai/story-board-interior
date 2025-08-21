import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname);

  const isActiveCheck = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    setIsActive(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {/* Header */}
      <header className="w-full h-20 bg-[#fffdfa] relative z-50 px-4 lg:px-20">
        <div className="flex items-center justify-between h-full max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link to="/" className="font-['Cormorant_Garamond'] text-xl md:text-2xl font-bold text-[#746b5f] uppercase hover:text-[#5d5449] transition-colors">
            Story Board Interior
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-4 py-6 transition-colors ${isActiveCheck('/') 
                ? 'bg-[rgba(116,107,95,0.3)] border-t-[3px] border-t-[#746b5f]'
                : ' hover:bg-[rgba(116,107,95,0.3)]'
                }`}
            >
              <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#746b5f]">
                Home
              </span>
            </Link>
            <Link
              to="/portfolio"
              className={`px-4 py-6 transition-colors ${isActiveCheck('/portfolio') 
                ? 'bg-[rgba(116,107,95,0.3)] border-t-[3px] border-t-[#746b5f]'
                : ' hover:bg-[rgba(116,107,95,0.3)]'
                }`}
            >
              <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#746b5f]">
                Portfolio
              </span>
            </Link>
            <Link
              to="/about"
              className={`px-4 py-6 transition-colors ${isActiveCheck('/about') 
                ? 'bg-[rgba(116,107,95,0.3)] border-t-[3px] border-t-[#746b5f]'
                : 'hover:bg-[rgba(116,107,95,0.3)]'
                }`}
            >
              <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#746b5f]">
                About
              </span>
            </Link>
            <Link
              to="/services"
              className={`px-4 py-6 transition-colors ${isActiveCheck('/services') 
                ? 'bg-[rgba(116,107,95,0.3)] border-t-[3px] border-t-[#746b5f]'
                : ' hover:bg-[rgba(116,107,95,0.3)]'
                }`}
            >
              <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#746b5f]">
                Services
              </span>
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-6 transition-colors ${isActiveCheck('/testimonials') 
                ? 'bg-[rgba(116,107,95,0.3)] border-t-[3px] border-t-[#746b5f]'
                : ' hover:bg-[rgba(116,107,95,0.3)]'
                }`}
            >
              <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#746b5f]">
                Testimonials
              </span>
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-6 transition-colors ${isActiveCheck('/contact')
                ? 'bg-[rgba(116,107,95,0.3)] border-t-[3px] border-t-[#746b5f]'
                : ' hover:bg-[rgba(116,107,95,0.3)]'
                }`}
            >
              <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#746b5f]">
                Contact
              </span>
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center justify-center px-4 py-2 border border-[#746b5f] hover:bg-[#746b5f] hover:text-white transition-colors"
          >
            <span className="font-['Cormorant_Garamond'] text-base font-semibold text-[#746b5f] hover:text-white uppercase">
              Book a Consultation
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-[#746b5f] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#746b5f] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#746b5f] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden absolute top-full left-0 w-full bg-[#fffdfa] border-t border-[#e0dcd3] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col py-4 px-4 space-y-4">
            <Link
              to="/"
              className={`font-['Cormorant_Garamond'] text-lg font-medium transition-colors py-2 ${isActiveCheck('/') ? 'text-[#746b5f]' : 'text-[#757575] hover:text-[#746b5f]'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className={`font-['Cormorant_Garamond'] text-lg font-medium transition-colors py-2 ${isActiveCheck('/portfolio') ? 'text-[#746b5f]' : 'text-[#757575] hover:text-[#746b5f]'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className={`font-['Cormorant_Garamond'] text-lg font-medium transition-colors py-2 ${isActiveCheck('/about') ? 'text-[#746b5f]' : 'text-[#757575] hover:text-[#746b5f]'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`font-['Cormorant_Garamond'] text-lg font-medium transition-colors py-2 ${isActiveCheck('/services') ? 'text-[#746b5f]' : 'text-[#757575] hover:text-[#746b5f]'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/testimonials"
              className={`font-['Cormorant_Garamond'] text-lg font-medium transition-colors py-2 ${isActiveCheck('/testimonials') ? 'text-[#746b5f]' : 'text-[#757575] hover:text-[#746b5f]'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className={`font-['Cormorant_Garamond'] text-lg font-semibold py-2 border-t border-[#e0dcd3] mt-2 pt-4 transition-colors ${isActiveCheck('/contact') ? 'text-[#746b5f]' : 'text-[#746b5f] hover:text-[#5d5449]'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center px-4 py-3 border border-[#746b5f] hover:bg-[#746b5f] hover:text-white transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-['Cormorant_Garamond'] text-base font-semibold text-[#746b5f] hover:text-white uppercase">
                Book a Consultation
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar