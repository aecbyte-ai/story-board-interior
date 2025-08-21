import Project_Card from "../components/project_card"


const Portfolio_Page = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full h-[50vh] sm:h-[60vh] lg:h-[470px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/G3Z2wbENK5.png)] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-7xl font-bold text-white uppercase mb-4">
                        The Work
                    </h1>
                    <p className="font-['Manrope'] text-base sm:text-lg lg:text-xl font-medium text-[rgba(255,255,255,0.8)] max-w-2xl mx-auto leading-relaxed">
                        A curated collection of residences, developments, and hospitality
                        spaces crafted with soul, precision, and purpose.
                    </p>
                </div>
                <div className="absolute bottom-8 flex-col items-center hidden sm:flex">
                    <span className="font-['Cormorant_Garamond'] text-sm font-bold text-white uppercase mb-3">
                        Scroll to Explore
                    </span>
                    <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/ZAQfN7VbmG.png)] bg-cover bg-no-repeat" />
                </div>
            </section>


            {/* Recent Projects Section */}
            <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 lg:mb-16">
                        Recent Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Project_Card />
                        <Project_Card />
                        <Project_Card />
                        <Project_Card />
                        <Project_Card />
                        <Project_Card />
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 sm:mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                            Featured Projects
                        </h2>
                        
                        <div className="relative">
                            {/* Navigation buttons */}
                            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/V1AvJFvXqb.png)] bg-cover bg-no-repeat" />
                            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 border border-[#746b5f] flex items-center justify-center">
                                <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/NeArhaiCCs.png)] bg-cover bg-no-repeat" />
                            </button>
                            
                            {/* Featured projects grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mx-8 sm:mx-12 lg:mx-16">
                                <div className="aspect-[4/5] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/Px0gD2V9gw.png)] bg-cover bg-center" />
                                <div className="aspect-[4/5] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/7tYhhFaEEA.png)] bg-cover bg-center" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8 sm:mt-12">
                            <div className="text-center lg:text-left">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#746b5f] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                                Mayfair Residence
                            </h3>
                            <p className="text-base sm:text-lg text-[#7a746c] leading-relaxed mb-6" style={{fontFamily: 'Manrope, sans-serif'}}>
                                A complete renovation of a 19th-century townhouse, blending heritage
                                details with contemporary luxury.
                            </p>
                            <button className="flex items-center gap-3 px-4 py-3 hover:bg-[#e8e5df] transition-colors mx-auto lg:mx-0">
                                <span className="text-base font-bold text-[#746b5f] uppercase" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                                    View Project
                                </span>
                                <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/kC5Mhb7FLF.png)] bg-cover bg-no-repeat" />
                            </button>
                            </div>
                            
                            <div className="text-center lg:text-left">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#746b5f] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                                Riviera Hotel
                            </h3>
                            <p className="text-base sm:text-lg text-[#7a746c] leading-relaxed mb-6" style={{fontFamily: 'Manrope, sans-serif'}}>
                                A boutique hospitality project featuring custom furnishings and a
                                seamless indoor-outdoor experience.
                            </p>
                            <button className="flex items-center gap-3 px-4 py-3 hover:bg-[#e8e5df] transition-colors mx-auto lg:mx-0">
                                <span className="text-base font-bold text-[#746b5f] uppercase" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                                    View Project
                                </span>
                                <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/tY3GHRiUwM.png)] bg-cover bg-no-repeat" />
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full h-[50vh] sm:h-[60vh] lg:h-[470px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/scSmJ0TuM1.png)] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    Let's Design Your Story
                </h2>
                <p className="text-base sm:text-lg lg:text-2xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Every space tells a unique story. Let us help craft yours with
                    precision, vision, and an unwavering commitment to excellence.
                </p>
                <button className="px-6 py-3 bg-white text-[#746b5f] font-semibold uppercase hover:bg-gray-100 transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    Book a Consultation
                </button>
            </section>
        </>
    )
}

export default Portfolio_Page