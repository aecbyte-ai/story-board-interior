import React from 'react'

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

interface BenefitCardProps {
  icon: string
  title: string
}


interface UseCaseCardProps {
  image: string
  title: string
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ image, title }) => (
  <div className="relative h-[400px] bg-cover bg-center rounded-lg overflow-hidden group">
    <div 
      className="w-full h-full"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%), url('${image}')`
      }}
    >
      <div className="absolute bottom-6 left-6">
        <h3 className="font-cormorant font-bold text-2xl text-white leading-8">
          {title}
        </h3>
      </div>
    </div>
  </div>
)

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title }) => (
  <div className="bg-white border border-gray-200 p-6 text-center h-[189px] flex flex-col items-center justify-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 mb-6">
      <img src={icon} alt="" className="w-full h-full" />
    </div>
    <h3 className="font-cormorant font-bold text-lg text-primary leading-8">
      {title}
    </h3>
  </div>
)



const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => (
  <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="w-full bg-cover bg-center overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="font-cormorant font-bold text-2xl text-primary">
        {title}
      </h3>
      <p className="font-manrope text-secondary leading-6">
        {description}
      </p>
    </div>
  </div>
);


const Decorative_Page: React.FC = () => {


   const useCases = [
    {
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/qbvqzq8wJS.png',
      title: 'Feature Walls in Living Rooms & Bedrooms'
    },
    {
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/SiVfA4zT25.png',
      title: 'Luxury Hotel & Restaurant Interiors'
    },
    {
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/2a5FF1TAAk.png',
      title: 'Office Reception Areas & Meeting Rooms'
    },
    {
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/RLbUKmwoLt.png',
      title: 'Statement Ceilings and Columns'
    }
  ]


  const benefits = [
    {
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/UJyJAnaXEz.svg',
      title: 'Long-lasting and durable finish'
    },
    {
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/gJfqDCG7E8.svg',
      title: 'Customizable textures, colors, and patterns'
    },
    {
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/MOVSnWToX7.svg',
      title: 'Eco-friendly, breathable materials'
    },
    {
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/Zrs2xC4iLj.svg',
      title: 'Expert craftsmanship and precision'
    }
  ]


  const services = [
    {
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/UpmV0vpQ1T.png',
      title: 'Venetian Plaster',
      description: 'Luxurious, polished surfaces with a timeless, marble-like finish that radiates elegance.'
    },
    {
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/jpzyOwq9Zg.png',
      title: 'Textured Plaster',
      description: 'Adds depth and personality with creative, eye-catching patterns and intricate relief.'
    },
    {
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/MXuRwhO09m.png',
      title: 'Metallic & Pearl Finishes',
      description: 'Sophisticated shimmer for a refined, modern touch with lasting impact.'
    },
    {
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/kTfpcnq7q3.png',
      title: 'Concrete & Stone Effects',
      description: 'Contemporary, industrial-inspired surfaces with raw, organic beauty.'
    },
    {
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/V3krNNGkhE.png',
      title: 'Custom Artistic Designs',
      description: 'Handcrafted textures tailored to your space for a truly unique feel.'
    },
    {
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/BxhcbmKkLj.png',
      title: 'Limewash & Mineral Paints',
      description: 'Soft, natural patina that brings warmth and timeless character to walls.'
    }
  ]
  return (
    <>
    <section 
      className="h-[470px] relative bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(53, 42, 29, 0.6), rgba(53, 42, 29, 0.6)), url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-20/g7Uv7BYBOa.png')`
      }}
    >
      <div className="text-center text-white max-w-6xl px-4">
        <h1 className="font-bold text-7xl uppercase mb-6 leading-tight drop-shadow-lg" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Decorative Finishes & Plasters
        </h1>
        <p className="text-xl leading-7 max-w-4xl mx-auto text-white/80" style={{fontFamily: 'Manrope, sans-serif'}}>
          At Shalini Misra, we specialize in creating unique textures and finishes that bring character and depth to any space. From subtle elegance to bold statement walls, our decorative plasters are crafted to complement your interior design vision.
        </p>
      </div>
    </section>

    <section className="py-20 px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className=" font-bold text-4xl text-primary uppercase text-center mb-16 text-[#746b5f]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Our Decorative Finishes
        </h2>
        
        <div className="grid grid-cols-3 gap-12 mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          {services.slice(3, 6).map((service, index) => (
            <ServiceCard key={index + 3} {...service} />
          ))}
        </div>
      </div>
    </section>


   <section className="bg-[#f2efe9] py-16 text-[#746b5f]" style={{fontFamily: 'Cormorant Garamond, serif'}} >
      <div className="max-w-7xl mx-auto px-20">
        <h2 className="text-4xl text-primary uppercase text-center mb-16">
          Why Choose Our Decorative Plasters?
        </h2>
        
        <div className="grid grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>


    <section className="py-20 px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl text-primary uppercase text-center mb-16 text-[#746b5f]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Perfect For
        </h2>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          {useCases.slice(0, 2).map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {useCases.slice(2, 4).map((useCase, index) => (
            <UseCaseCard key={index + 2} {...useCase} />
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default Decorative_Page