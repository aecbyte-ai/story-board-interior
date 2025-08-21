import { useState } from 'react';

interface CarouselItem {
  id: number;
  title: string;
  location: string;
  image: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "The Kensington Townhouse",
    location: "London, United Kingdom",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/hRRZPRiK8C.png"
  },
  {
    id: 2,
    title: "Mayfair Penthouse",
    location: "London, United Kingdom", 
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/q4ifdRuQcd.png"
  },
  {
    id: 3,
    title: "Chelsea Residence",
    location: "London, United Kingdom",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/AG1mREdDxz.png"
  },
  {
    id: 4,
    title: "Notting Hill Villa",
    location: "London, United Kingdom",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/3kPaz01SLG.png"
  },
  {
    id: 5,
    title: "Belgravia Apartment",
    location: "London, United Kingdom",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/iJY8zeawRb.png"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getPreviousIndex = () => {
    return currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div className="h-[400px] sm:h-[500px] lg:h-[600px] relative overflow-hidden">
      {/* Main carousel container */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Previous button */}
        <button
          onClick={goToPrevious}
          disabled={isTransitioning}
          className="absolute left-2 sm:left-4 lg:left-8 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/95 hover:bg-white border-2 border-[#746b5f] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous image"
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-[#746b5f]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carousel track */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          
          {/* Previous image (larger) */}
          <div 
            className={`hidden sm:block absolute left-16 lg:left-20 top-1/2 transform -translate-y-1/2 w-[120px] sm:w-[200px] lg:w-[320px] h-[180px] sm:h-[300px] lg:h-[480px] transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 ${
              isTransitioning ? 'opacity-50' : 'opacity-75 hover:opacity-90'
            }`}
            onClick={goToPrevious}
          >
            <div 
              className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${carouselItems[getPreviousIndex()].image})` }}
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg" />
          </div>

          {/* Main image */}
          <div className="relative w-[280px] sm:w-[400px] lg:w-[700px] h-[350px] sm:h-[500px] lg:h-[600px] z-10 mx-4">
            <div 
              className={`w-full h-full bg-cover bg-center rounded-lg shadow-2xl transition-all duration-500 ease-in-out transform ${
                isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
              }`}
              style={{ backgroundImage: `url(${carouselItems[currentIndex].image})` }}
            >
              {/* Overlay with project info */}
              <div className="absolute bottom-0 left-0 right-0 h-[100px] sm:h-[120px] lg:h-[140px] bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-b-lg flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                <h3 className="font-['Cormorant_Garamond'] text-lg sm:text-2xl lg:text-3xl font-bold leading-tight text-white mb-1 sm:mb-2">
                  {carouselItems[currentIndex].title}
                </h3>
                <p className="font-['Manrope'] text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-[rgba(255,255,255,0.9)]">
                  {carouselItems[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          {/* Next image (larger) */}
          <div 
            className={`hidden sm:block absolute right-16 lg:right-20 top-1/2 transform -translate-y-1/2 w-[120px] sm:w-[200px] lg:w-[320px] h-[180px] sm:h-[300px] lg:h-[480px] transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 ${
              isTransitioning ? 'opacity-50' : 'opacity-75 hover:opacity-90'
            }`}
            onClick={goToNext}
          >
            <div 
              className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${carouselItems[getNextIndex()].image})` }}
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg" />
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={goToNext}
          disabled={isTransitioning}
          className="absolute right-2 sm:right-4 lg:right-8 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/95 hover:bg-white border-2 border-[#746b5f] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next image"
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-[#746b5f]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentIndex 
                ? 'bg-white border-white scale-125 shadow-lg' 
                : 'bg-white/30 border-white/50 hover:bg-white/60 hover:border-white/80 hover:scale-110'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-white font-['Manrope'] text-xs sm:text-sm font-medium">
            {currentIndex + 1} / {carouselItems.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;