

const Testimonials_Page = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="w-full h-[50vh] sm:h-[60vh] lg:h-[470px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/ukztCFbe1J.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white uppercase mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    CLIENT VOICES
                </h1>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-white/80 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
                    A curated collection of words from those who live in the spaces we
                    design.
                </p>
            </div>

            {/* Featured Testimonial */}
            <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#746b5f] mb-6 leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    "Their vision transformed our space into something beyond what we
                    imagined possible."
                </blockquote>
                <p className="text-base sm:text-lg text-[#757575] leading-relaxed mb-6" style={{fontFamily: 'Manrope, sans-serif'}}>
                    When we first approached Shalini Misra, we had a vision but couldn't
                    quite articulate it. Their team took the time to understand not just
                    what we liked, but how we lived. The result is a space that feels both
                    curated and effortlessly lived-in a perfect balance of sophistication
                    and comfort that truly represents who we are.
                </p>
                <cite className="text-lg sm:text-xl lg:text-2xl font-bold text-[#746b5f] not-italic block mb-2" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Katherine & James Thornhill
                </cite>
                <p className="text-base sm:text-lg text-[#757575]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Manhattan Residence, Complete Renovation
                </p>
                        </div>
                        <div className="aspect-[4/5] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/n2OZXWeGbM.png)] bg-cover bg-center order-1 lg:order-2" />
                    </div>
                </div>
            </div>
            
            {/* Before/After Section */}
            <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-8">
                        <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#746b5f] uppercase mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    Before
                </h3>
                <div className="aspect-[4/3] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/EthHUgTupr.png)] bg-cover bg-center" />
                        </div>
                        <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#746b5f] uppercase mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    After
                </h3>
                <div className="aspect-[4/3] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/eCVvVxTexD.png)] bg-cover bg-center" />
                        </div>
                    </div>
                    
                    <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#746b5f] leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    "Working with Shalini Misra was the most collaborative design
                    experience we've ever had. They challenged our vision in the best ways
                    possible, resulting in spaces that exceed our expectations every day."
                </blockquote>
                    </div>
                </div>
            </div>


            {/* Client Reflections Section */}
            <div className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24">
                <div className="px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 sm:mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    Client Reflections
                </h2>
                
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-[#e0dcd3] max-w-2xl mx-auto">
                        <div className="aspect-[3/2] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/ew5gU14khB.png)] bg-cover bg-center" />
                        <div className="p-6 lg:p-8">
                        <div className="w-9 h-9 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/68BtwqPQiJ.png)] bg-cover bg-no-repeat mb-4" />
                        <blockquote className="text-base sm:text-lg lg:text-xl font-semibold text-[#746b5f] leading-relaxed mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                            "They created a perfect balance between our minimalist preferences
                            and the industrial character of our loft."
                        </blockquote>
                        <cite className="text-base font-medium text-[#50504f] not-italic" style={{fontFamily: 'Manrope, sans-serif'}}>
                            Victoria & Michael Chen
                        </cite>
                        </div>
                    </div>
                </div>
                </div>
            </div>


            {/* More Client Stories Section */}
            <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 sm:mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
        More Client Stories
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div className="bg-[#f2efe9] border border-[#c6c6c6] p-4 sm:p-6">
          <div className="w-8 h-8 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/nv65ujyPsZ.png)] bg-cover bg-no-repeat mb-3" />
          <blockquote className="text-base sm:text-lg lg:text-xl font-semibold text-[#746b5f] leading-relaxed mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            "Their attention to the architectural details of our 19th century
            brownstone was impeccable."
          </blockquote>
          <cite className="text-base font-medium text-[#51504f] not-italic" style={{fontFamily: 'Manrope, sans-serif'}}>
            S.M., New York
          </cite>
        </div>

        
        <div className="bg-[#f2efe9] border border-[#c6c6c6] p-4 sm:p-6">
          <div className="w-8 h-8 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/Us7cP2PJ8d.png)] bg-cover bg-no-repeat mb-3" />
          <blockquote className="text-base sm:text-lg lg:text-xl font-semibold text-[#746b5f] leading-relaxed mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            "They transformed our vacation home into a coastal retreat that
            still feels sophisticated."
          </blockquote>
          <cite className="text-base font-medium text-[#51504f] not-italic" style={{fontFamily: 'Manrope, sans-serif'}}>
            J.D., California
          </cite>
        </div>


        <div className="bg-[#f2efe9] border border-[#c6c6c6] p-4 sm:p-6">
          <div className="w-8 h-8 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/Us7cP2PJ8d.png)] bg-cover bg-no-repeat mb-3" />
          <blockquote className="text-base sm:text-lg lg:text-xl font-semibold text-[#746b5f] leading-relaxed mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            "The team's ability to blend modern luxury with classic elegance exceeded our expectations."
          </blockquote>
          <cite className="text-base font-medium text-[#51504f] not-italic" style={{fontFamily: 'Manrope, sans-serif'}}>
            R.K., London
          </cite>
        </div>

        <div className="bg-[#f2efe9] border border-[#c6c6c6] p-4 sm:p-6">
          <div className="w-8 h-8 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/Us7cP2PJ8d.png)] bg-cover bg-no-repeat mb-3" />
          <blockquote className="text-base sm:text-lg lg:text-xl font-semibold text-[#746b5f] leading-relaxed mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            "Every detail was thoughtfully considered, creating a space that truly feels like home."
          </blockquote>
          <cite className="text-base font-medium text-[#51504f] not-italic" style={{fontFamily: 'Manrope, sans-serif'}}>
            M.T., Paris
          </cite>
        </div>
      </div>
                </div>
            </div>



            {/* Join Client Community Section */}
      <div className="h-[100vh] sm:h-[80vh] lg:h-[795px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/3srpapasjQ.png)] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
        <div className="bg-white p-6 sm:p-8 lg:p-12 max-w-2xl w-full mx-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Join Our Client Community
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#757575] text-center mb-8" style={{fontFamily: 'Manrope, sans-serif'}}>
            Share your experience with Shalini Misra
          </p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-base font-normal text-[#3d3d3d] mb-3" style={{fontFamily: 'Manrope, sans-serif'}}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-12 sm:h-14 bg-white border border-[#c2c2c2] px-4 py-3 text-base text-[#757575] focus:outline-none focus:border-[#746b5f] transition-colors"
                style={{fontFamily: 'Manrope, sans-serif'}}
              />
            </div>
            
            <div>
              <label className="block text-base font-normal text-[#3d3d3d] mb-3" style={{fontFamily: 'Manrope, sans-serif'}}>
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full h-12 sm:h-14 bg-white border border-[#c2c2c2] px-4 py-3 text-base text-[#757575] focus:outline-none focus:border-[#746b5f] transition-colors"
                style={{fontFamily: 'Manrope, sans-serif'}}
              />
            </div>
            
            <div>
              <label className="block text-base font-normal text-[#3d3d3d] mb-3" style={{fontFamily: 'Manrope, sans-serif'}}>
                Your Testimonial
              </label>
              <textarea
                placeholder="Share your experience with us"
                rows={4}
                className="w-full bg-white border border-[#c2c2c2] px-4 py-3 text-base text-[#757575] focus:outline-none focus:border-[#746b5f] transition-colors resize-vertical"
                style={{fontFamily: 'Manrope, sans-serif'}}
              />
            </div>
            
            <button className="w-full px-4 py-3 bg-[#746b5f] border border-[#858585] text-white font-semibold uppercase shadow-lg hover:bg-[#635a4f] transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Share Your Story
            </button>
          </form>
        </div>
      </div>
            </>
            );
}

export default Testimonials_Page