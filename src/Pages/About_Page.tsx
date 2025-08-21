

const About_Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-[50vh] sm:h-[60vh] lg:h-[470px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/tkUQchYTLT.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white uppercase mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          About US
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-medium text-white/80 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
          A legacy of elegance, creativity, and craftsmanship — tailored for the
          discerning eye.
        </p>
      </div>
      
      {/* About Shalini Misra Section */}
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] uppercase mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
        About Shalini Misra
      </h2>
      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#746b5f] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
        “Timeless interiors shaped by artistry, culture, and detail.”
      </p>
      <p className="text-base sm:text-lg text-[#757575] leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
        Shalini Misra is a full-service interior design studio specializing in
        residential and commercial spaces. We combine a deep understanding of
        architecture, spatial flow, and materiality with a refined aesthetic
        sensibility. Our approach is collaborative, thoughtful, and always
        bespoke — tailored to each client's lifestyle and aspirations. With an
        unwavering commitment to quality and an eye for the extraordinary, we
        create spaces that transcend trends and stand the test of time.
      </p>
        </div>
      </div>
      
      {/* Vision Section */}
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="aspect-[4/5] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/iJY8zeawRb.png)] bg-cover bg-center order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] uppercase mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Led by Vision. Driven by Detail.
        </h2>
        <p className="text-base sm:text-lg text-[#7a746c] leading-relaxed mb-6" style={{fontFamily: 'Manrope, sans-serif'}}>
          Founded by Alexandra Laurent, the studio was born out of a desire to
          create interiors that are as functional as they are beautiful. With a
          background in fine arts and architecture, Alexandra brings a unique
          perspective that blends classic European influences with contemporary
          living.
        </p>
        <p className="text-base sm:text-lg text-[#7a746c] leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
          Each project reflects a signature touch: sophisticated palettes,
          curated furnishings, and an eye for balance and proportion.
          Alexandra's work is distinguished by her commitment to craftsmanship
          and her ability to create spaces that feel both timeless and deeply
          personal to each client.
        </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* What We Do Section */}
      <div className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] uppercase mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          What We Do
        </h2>
        <p className="text-base sm:text-lg text-[#7a746c] leading-relaxed mb-8 max-w-4xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
          From interior design and architecture to bespoke furniture and art
          installation, our team delivers turn-key design solutions with
          elegance and ease. We guide each project from concept development to
          final styling, ensuring a seamless process and exceptional results.
        </p>
        <button className="px-6 py-3 bg-[#746b5f] border border-[#858585] text-white font-semibold uppercase shadow-lg hover:bg-[#635a4f] transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Explore Our Services
        </button>
        </div>
      </div>
      
      {/* Our Team Section */}
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 sm:mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
        OUR TEAM
      </h2>
      
      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
        <div className="text-center">
          <div className="aspect-[3/4] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/gYXP7Oot3s.png)] bg-cover bg-center mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#746b5f] mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Shalini Misra
          </h3>
          <p className="text-base text-[#757575]" style={{fontFamily: 'Manrope, sans-serif'}}>
            Founder & Creative Director
          </p>
        </div>
        
        <div className="text-center">
          <div className="aspect-[3/4] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/NVTPyOxwJL.png)] bg-cover bg-center mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#746b5f] mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Elena Rousseau
          </h3>
          <p className="text-base text-[#757575]" style={{fontFamily: 'Manrope, sans-serif'}}>
            Senior Interior Designer
          </p>
        </div>
        
        <div className="text-center sm:col-span-2 lg:col-span-1">
          <div className="aspect-[3/4] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/53bfxgAVSa.png)] bg-cover bg-center mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#746b5f] mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          James Alcott
          </h3>
          <p className="text-base text-[#757575]" style={{fontFamily: 'Manrope, sans-serif'}}>
            Head of Interior Architecture
          </p>
        </div>
      </div>
      
      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="text-center">
          <div className="aspect-[3/4] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/6DxRpEXqKg.png)] bg-cover bg-center mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#746b5f] mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Sophia Reed
          </h3>
          <p className="text-base text-[#757575]" style={{fontFamily: 'Manrope, sans-serif'}}>
            FF&E & Styling Manager
          </p>
        </div>
        
        <div className="text-center">
          <div className="aspect-[3/4] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/pJbiyhOEAa.png)] bg-cover bg-center mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#746b5f] mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Ayaan Malik
          </h3>
          <p className="text-base text-[#757575]" style={{fontFamily: 'Manrope, sans-serif'}}>
            Art Curator & Installation Lead
          </p>
        </div>
        
        <div className="text-center sm:col-span-2 lg:col-span-1">
          <div className="aspect-[3/4] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/n3O49ZoUma.png)] bg-cover bg-center mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#746b5f] mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Thomas Hale
          </h3>
          <p className="text-base text-[#757575]" style={{fontFamily: 'Manrope, sans-serif'}}>
            Client Relations & Project Coordinator
          </p>
        </div>
      </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="h-[50vh] sm:h-[60vh] lg:h-[416px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/zkm9j9h7hh.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Let us help you shape your space into something extraordinary.
        </h2>
        <button className="px-6 py-3 bg-white text-[#746b5f] font-semibold uppercase hover:bg-gray-100 transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Book a Consultation
        </button>
      </div>
    </>
  )
}

export default About_Page