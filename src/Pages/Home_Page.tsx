

import Carousel from '../components/Carousel';

const Home_Page = () => {
  return (
    <>
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[#352A1D]/60 bg-blend-multiply flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: ` url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Kwf24QR6ub.png)`
        }}
      >
        <div className="flex-1 flex flex-col justify-center items-center text-center max-w-6xl mx-auto py-16 sm:py-20">
          <h1 className="font-bold text-white uppercase mb-6">
            <span className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Luxury Interiors
            </span>
            <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mt-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Rooted in Soul & Story
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto font-medium mb-8 px-4" style={{fontFamily: 'Manrope, sans-serif'}}>
            Award-winning interior architecture & design, crafted for the world's most discerning residences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-4 sm:px-6 py-3 bg-[#746b5f] border border-[#858585] text-white font-semibold uppercase shadow-lg hover:bg-[#635a4f] transition-colors text-sm sm:text-base" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              View Portfolio
            </button>
            <button className="px-4 sm:px-6 py-3 border border-white text-white font-semibold uppercase hover:bg-white hover:text-[#746b5f] transition-colors text-sm sm:text-base" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Meet the Studio
            </button>
          </div>
        </div>
        
        <div className="text-center pb-8 hidden sm:block">
          <p className="text-white text-sm font-bold uppercase mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Scroll to Explore
          </p>
          <div className="w-6 h-6 bg-cover bg-no-repeat mx-auto" style={{backgroundImage: 'url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/iyoufNPa3g.png)'}} />
        </div>
      </div>
      
      <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mt-16 sm:mt-24" style={{fontFamily: 'Cormorant Garamond, serif'}}>
        Design Ethos
      </h2>
      <p className="text-base sm:text-lg text-[#7a746b] text-center mt-4 max-w-4xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
        Our philosophy is built on three foundational pillars that guide every
        project we undertake.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 sm:mt-12 max-w-7xl mx-auto">
        <div className="bg-[#f2efe9] border border-[#e0dcd3]">
          <div className="h-48 sm:h-64 lg:h-72 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/HGOmnM2UnX.png)] bg-cover bg-center border-b border-[#e0dcd3]" />
          <div className="p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-bold text-[#746b5f] mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Wellbeing-Centered Spaces
          </h3>
          <p className="text-base text-[#7a746c] leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
            Design that nourishes emotional and spiritual harmony.
          </p>
          </div>
        </div>
        
        <div className="bg-[#f2efe9] border border-[#e0dcd3]">
          <div className="h-48 sm:h-64 lg:h-72 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/7UvACi4CSN.png)] bg-cover bg-center border-b border-[#e0dcd3]" />
          <div className="p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-bold text-[#746b5f] mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Legacy Through Craft
          </h3>
          <p className="text-base text-[#7a746c] leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
            Every detail reflects timeless techniques and modern sophistication.
          </p>
          </div>
        </div>
        
        <div className="bg-[#f2efe9] border border-[#e0dcd3]">
          <div className="h-48 sm:h-64 lg:h-72 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/OTQ0qWhDt8.png)] bg-cover bg-center border-b border-[#e0dcd3]" />
          <div className="p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-bold text-[#746b5f] mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Art of Storytelling
          </h3>
          <p className="text-base text-[#7a746c] leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
            We don’t decorate—we narrate your life through space.
          </p>
          </div>
        </div>
      </div>
      </div>
      
      <div className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24 mt-16 sm:mt-24">
        <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Signature Projects
        </h2>
        <p className="text-base sm:text-lg text-[rgba(122,116,108,0.8)] text-center mb-12 sm:mb-16 max-w-4xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
          Our curated collection of distinctive spaces, each with their own
          unique narrative.
        </p>
        <div className="max-w-7xl mx-auto">
          <Carousel />
        </div>
        </div>
      </div>
      
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="aspect-[4/5] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/3kPaz01SLG.png)] bg-cover bg-center order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] uppercase mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          About Shalini Misra
        </h2>
        <p className="text-base sm:text-lg text-[#7a746c] leading-relaxed mb-6" style={{fontFamily: 'Manrope, sans-serif'}}>
          At Shalini Misra Ltd., every project is a living narrative. With
          global sensibilities and London-rooted precision, we design holistic
          spaces that stir the soul.
        </p>
        <p className="text-base sm:text-lg text-[#7a746c] leading-relaxed mb-8" style={{fontFamily: 'Manrope, sans-serif'}}>
          Our approach merges architecture, interior design, and art curation to
          create environments that reflect our clients' identities while pushing
          the boundaries of contemporary luxury.
        </p>
        <button className="flex items-center gap-3 px-4 py-3 hover:bg-[#f8f6f3] transition-colors">
          <span className="text-base font-bold text-[#746b5f] uppercase" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Meet the Team
          </span>
          <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/9erdPeRqng.png)] bg-cover bg-no-repeat" />
        </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
        Our Services
      </h2>
      <p className="text-base sm:text-lg text-[#5a5a5a] text-center mb-12 sm:mb-16 max-w-4xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
        Comprehensive design solutions tailored to your unique vision and
        lifestyle.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        <div className="bg-white border border-[#e0dcd3] p-6 text-center">
          <div className="w-12 h-12 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Fi8zs6jyoB.png)] bg-cover bg-no-repeat mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-[#746b5f] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Interior Design
          </h3>
          <p className="text-base text-[#7a746c] leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
            Creating harmonious spaces that balance aesthetics, functionality,
            and emotional resonance.
          </p>
        </div>
        
        <div className="bg-white border border-[#e0dcd3] p-6 text-center">
          <div className="w-12 h-12 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/SRG9AYpuqF.png)] bg-cover bg-no-repeat mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-[#746b5f] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Interior Architecture
          </h3>
          <p className="text-base text-[#7a746c] leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
            Transforming structural elements to reimagine space and light within
            your environment.
          </p>
        </div>
        
        <div className="bg-white border border-[#e0dcd3] p-6 text-center">
          <div className="w-12 h-12 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/agydd1bNMG.png)] bg-cover bg-no-repeat mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-[#746b5f] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Art Curation & Installation
          </h3>
          <p className="text-base text-[#7a746c] leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
            Sourcing and integrating art pieces that complement and elevate your
            interior narrative.
          </p>
        </div>
        
        <div className="bg-white border border-[#e0dcd3] p-6 text-center">
          <div className="w-12 h-12 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/63aF1Q0KAR.png)] bg-cover bg-no-repeat mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-[#746b5f] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Bespoke Furniture & FF&E
          </h3>
          <p className="text-base text-[#7a746c] leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
            Custom-designed furnishings that embody exclusivity and precise
            craftsmanship.
          </p>
        </div>
      </div>
      </div>
      
      <div className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24 mt-16 sm:mt-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 sm:mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Instagram
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto mb-8">
            <div className="aspect-square bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/xjLR94hUsf.png)] bg-cover bg-center" />
            <div className="aspect-square bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Jdu5Nc1WSN.png)] bg-cover bg-center relative">
              <div className="absolute top-4 right-4 w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/dagfK6Q8Rk.png)] bg-cover bg-no-repeat" />
            </div>
            <div className="aspect-square bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/ixEwsQUd4X.png)] bg-cover bg-center relative">
              <div className="absolute top-4 right-4 w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/9h7cPFc7Tr.png)] bg-cover bg-no-repeat" />
            </div>
            <div className="aspect-square bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/pS8yqLFUQz.png)] bg-cover bg-center" />
            <div className="aspect-square bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/LV6Ti1TF76.png)] bg-cover bg-center" />
            <div className="aspect-square bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/3Q8iXKOSUj.png)] bg-cover bg-center relative">
              <div className="absolute top-4 right-4 w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Y10L4cB7KN.png)] bg-cover bg-no-repeat" />
            </div>
            <div className="aspect-square bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/7kiQaFTMOO.png)] bg-cover bg-center relative">
              <div className="absolute top-4 right-4 w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/3KbnCYvj2O.png)] bg-cover bg-no-repeat" />
            </div>
            <div className="aspect-square bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Nrai10b2dL.png)] bg-cover bg-center" />
          </div>
          
          <div className="text-center">
            <button className="flex items-center gap-3 px-4 py-3 hover:bg-[#e8e5df] transition-colors mx-auto">
            <span className="text-base font-bold text-[#746b5f] uppercase" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Follow US
            </span>
            <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Gx7t4CN6SO.png)] bg-cover bg-no-repeat" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#746b5f] text-center mb-12 sm:mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
        Trusted By World-Class Brands
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 max-w-6xl mx-auto opacity-60">
        <div className="h-8 sm:h-10 lg:h-12 w-auto bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Et7JegfN9B.png)] bg-contain bg-no-repeat bg-center" style={{aspectRatio: '172/48'}} />
        <div className="h-8 sm:h-10 lg:h-12 w-auto bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/1q4nteNdbV.png)] bg-contain bg-no-repeat bg-center" style={{aspectRatio: '173/45'}} />
        <div className="h-8 sm:h-10 lg:h-12 w-auto bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/ycci1e6RyL.png)] bg-contain bg-no-repeat bg-center" style={{aspectRatio: '95/48'}} />
        <div className="h-8 sm:h-10 lg:h-12 w-auto bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/i5jCtEtYjv.png)] bg-contain bg-no-repeat bg-center" style={{aspectRatio: '165/48'}} />
        <div className="h-8 sm:h-10 lg:h-12 w-auto bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/4Xe5rQ1n4T.png)] bg-contain bg-no-repeat bg-center" style={{aspectRatio: '136/49'}} />
        <div className="h-8 sm:h-10 lg:h-12 w-auto bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/WZD3Gi6wjD.png)] bg-contain bg-no-repeat bg-center" style={{aspectRatio: '172/48'}} />
        <div className="h-8 sm:h-10 lg:h-12 w-auto bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/FMvq01UqtV.png)] bg-contain bg-no-repeat bg-center" style={{aspectRatio: '173/45'}} />
      </div>
      </div>
      
      <div className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24 mt-16 sm:mt-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Client Testimonials
          </h2>
          <p className="text-base sm:text-lg text-[#7a746c] text-center mb-12 sm:mb-16" style={{fontFamily: 'Manrope, sans-serif'}}>
            Words from Those We’ve Designed For
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            <div className="bg-white border border-[#eaeaea] p-6 lg:p-8">
              <p className="text-base sm:text-lg font-medium text-[#7a746c] text-center mb-6 leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
                “Every room tells a story. We didn’t just get a beautiful home,
                we got a space that deeply reflects who we are. Shalini’s team
                understood us better than we understood ourselves.”
              </p>
              <p className="text-base sm:text-lg text-[#746b5f] text-center" style={{fontFamily: 'Manrope, sans-serif'}}>
                Private Client, Chelsea Residence
              </p>
            </div>
            
            <div className="bg-white border border-[#eaeaea] p-6 lg:p-8">
              <p className="text-base sm:text-lg font-medium text-[#7a746c] text-center mb-6 leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
                “What impressed us most was not just the artistry, but the
                empathy. Our family home was transformed into a sanctuary where
                elegance and emotion coexist.”
              </p>
              <p className="text-base sm:text-lg text-[#746b5f] text-center" style={{fontFamily: 'Manrope, sans-serif'}}>
                Couple, Mayfair Townhouse
              </p>
            </div>
            
            <div className="bg-white border border-[#eaeaea] p-6 lg:p-8 md:col-span-2 lg:col-span-1">
              <p className="text-base sm:text-lg font-medium text-[#7a746c] text-center mb-6 leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
                "The attention to detail and understanding of our lifestyle created a home that truly reflects our personality."
              </p>
              <p className="text-base sm:text-lg text-[#746b5f] text-center" style={{fontFamily: 'Manrope, sans-serif'}}>
                Family, Kensington Home
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#746b5f] py-16 sm:py-20 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Let Inspiration Find You
        </h2>
        <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
          Receive curated insights, new project releases, and exclusive
          invitations.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex border border-[#e0dcd3]">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-base text-[#efefef] bg-transparent placeholder-[#efefef] focus:outline-none"
              style={{fontFamily: 'Manrope, sans-serif'}}
            />
            <button className="px-4 py-3 bg-white text-[#746b5f] font-semibold uppercase text-sm sm:text-base hover:bg-gray-100 transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Join the List
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home_Page