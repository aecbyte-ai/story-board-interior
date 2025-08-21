import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#f2efe9] py-16">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {/* Company Info */}
            <div className="space-y-4">
              <Link 
                to="/" 
                className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#746b5f] uppercase hover:text-[#5d5449] transition-colors"
              >
                Shalini Misra
              </Link>
              <p className="font-['Manrope'] text-base font-normal text-[rgba(116,107,95,0.8)] leading-relaxed">
                Award-winning interior architecture & design, crafting extraordinary
                spaces for discerning clients worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/BUqJAuUsOL.png)] bg-cover bg-no-repeat"></div>
                <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/1NMicBqbA6.png)] bg-cover bg-no-repeat"></div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-['Cormorant_Garamond'] text-lg font-bold text-[#746b5f] uppercase">
                Quick Links
              </h3>
              <div className="space-y-3">
                <Link to="/portfolio" className="block font-['Manrope'] text-base font-normal text-[#746b5f] hover:text-[#5d5449] transition-colors">
                  Portfolio
                </Link>
                <Link to="/about" className="block font-['Manrope'] text-base font-normal text-[#746b5f] hover:text-[#5d5449] transition-colors">
                  About
                </Link>
                <Link to="/services" className="block font-['Manrope'] text-base font-normal text-[#746b5f] hover:text-[#5d5449] transition-colors">
                  Services
                </Link>
                <Link to="/testimonials" className="block font-['Manrope'] text-base font-normal text-[#746b5f] hover:text-[#5d5449] transition-colors">
                  Testimonials
                </Link>
                <Link to="/contact" className="block font-['Manrope'] text-base font-normal text-[#746b5f] hover:text-[#5d5449] transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-['Cormorant_Garamond'] text-lg font-bold text-[#746b5f] uppercase">
                Contact
              </h3>
              <div className="space-y-3">
                <p className="font-['Manrope'] text-base font-normal text-[#746b5f] leading-relaxed">
                  Studio Misra<br />
                  10 Harley Street<br />
                  London, W1G 9PF<br />
                  United Kingdom
                </p>
                <a href="mailto:studio@studiomisra.com" className="block font-['Cormorant_Garamond'] text-xl font-normal text-[#746b5f] hover:text-[#5d5449] transition-colors">
                  studio@studiomisra.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#e0dcd3] mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="font-['Manrope'] text-base font-normal text-[rgba(116,107,95,0.7)]">
                © 2025 Studio Misra Ltd. All rights reserved.
              </p>
              <p className="font-['Manrope'] text-base font-normal text-[rgba(116,107,95,0.7)]">
                Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
      </>
  )
}

export default Footer