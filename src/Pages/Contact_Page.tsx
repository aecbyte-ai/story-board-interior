export default function Main() {
  

  return (
    <div className="main-container w-full min-h-screen bg-[#fff] relative overflow-hidden">
     

      {/* Hero Section */}
      <section className="w-full h-[50vh] sm:h-[60vh] lg:h-[470px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/UQt4ypWRQ5.png)] bg-cover bg-center bg-no-repeat relative z-10 flex flex-col items-center justify-center px-4">
        <h1 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white text-center uppercase mb-4 max-w-4xl">
          Get In Touch
        </h1>
        <p className="font-['Manrope'] text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[rgba(255,255,255,0.8)] text-center max-w-4xl">
          We welcome collaborations, commissions, and conversations. Whether
          you're seeking to transform a residence, develop a hospitality space,
          or explore creative partnerships — we'd love to hear from you.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="w-full px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Full Name Field */}
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-12 lg:h-[51px] bg-[#f2efe9] border border-[#e0dcd3] rounded-xl px-4 py-3 font-['Manrope'] text-sm sm:text-base text-[#6c6c6c] focus:outline-none focus:border-[#746b5f] transition-colors"
                  />
                </div>

                {/* Email Address Field */}
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-12 lg:h-[51px] bg-[#f2efe9] border border-[#e0dcd3] rounded-xl px-4 py-3 font-['Manrope'] text-sm sm:text-base text-[#6c6c6c] focus:outline-none focus:border-[#746b5f] transition-colors"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="space-y-2">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full h-12 lg:h-[51px] bg-[#f2efe9] border border-[#e0dcd3] rounded-xl px-4 py-3 font-['Manrope'] text-sm sm:text-base text-[#6c6c6c] focus:outline-none focus:border-[#746b5f] transition-colors"
                  />
                </div>

                {/* Project Location Field */}
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Enter the project location"
                    className="w-full h-12 lg:h-[51px] bg-[#f2efe9] border border-[#e0dcd3] rounded-xl px-4 py-3 font-['Manrope'] text-sm sm:text-base text-[#6c6c6c] focus:outline-none focus:border-[#746b5f] transition-colors"
                  />
                </div>

                {/* Project Type Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <select className="w-full h-12 lg:h-[51px] bg-[#f2efe9] border border-[#e0dcd3] rounded-xl px-4 py-3 font-['Manrope'] text-sm sm:text-base text-[#6c6c6c] focus:outline-none focus:border-[#746b5f] transition-colors appearance-none">
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="retail">Retail</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#6c6c6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full bg-[#f2efe9] border border-[#e0dcd3] rounded-xl px-4 py-3 font-['Manrope'] text-sm sm:text-base text-[#6c6c6c] focus:outline-none focus:border-[#746b5f] transition-colors resize-vertical"
                  ></textarea>
                </div>

                {/* File Upload Field */}
                <div className="space-y-2">
                  <div className="w-full h-[150px] sm:h-[200px] bg-[#f2efe9] border border-[#e0dcd3] rounded-xl flex flex-col items-center justify-center space-y-4">
                    <div className="w-12 h-12 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/PvFH1BYheK.png)] bg-cover bg-no-repeat"></div>
                    <span className="font-['Manrope'] text-sm sm:text-base font-medium text-[#746b5f] text-center px-4">
                      Drag files here or click to upload
                    </span>
                    <button className="flex items-center justify-center px-4 py-2 bg-white border border-[#746b5f] hover:bg-[#746b5f] hover:text-white transition-colors">
                      <span className="font-['Manrope'] text-sm sm:text-base font-medium text-[#746b5f] hover:text-white">
                        Select File
                      </span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full flex items-center justify-center px-4 py-3 bg-[#746b5f] border border-[#858585] hover:bg-[#5d5449] transition-colors shadow-[0_5px_10px_0_rgba(255,255,255,0.1)]">
                  <span className="font-['Cormorant_Garamond'] text-sm sm:text-base font-semibold text-white uppercase">
                    Submit Enquiry
                  </span>
                </button>
              </div>
            </div>

            {/* Studio Visit Card */}
            <div className="lg:col-span-1">
              <div className="bg-[#746b5f] p-6 lg:p-8 h-fit">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/PhFZ00u660.png)] bg-cover bg-no-repeat"></div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-bold text-white">
                    Schedule a Studio Visit
                  </h3>
                </div>
                <p className="font-['Manrope'] text-sm sm:text-base font-normal text-[rgba(255,255,255,0.8)] mb-6 sm:mb-8 leading-relaxed">
                  We welcome you to visit our studio to discuss your project in
                  person. Please schedule an appointment.
                </p>
                <button className="flex items-center justify-center w-full px-4 py-3 border border-white hover:bg-white hover:text-[#746b5f] transition-colors">
                  <span className="font-['Cormorant_Garamond'] text-sm sm:text-base font-semibold text-white hover:text-[#746b5f] uppercase mr-2">
                    Book an Appointment
                  </span>
                  <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/O245o0fyUv.png)] bg-cover bg-no-repeat"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Our Studio Section */}
      <section className="w-full px-4 sm:px-6 lg:px-20 py-12">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] mb-6">
            Find Our Studio
          </h2>
          <div className="w-full h-[250px] sm:h-[300px] lg:h-[377px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/OEQ8qreeWQ.png)] bg-cover bg-center bg-no-repeat rounded-lg"></div>
        </div>
      </section>

      
    </div>
  );
}
