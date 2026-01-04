import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Banner slides data
const bannerSlides = [
  {
    id: 1,
    title: "New Collection",
    subtitle: "Discover Handmade Treasures",
    bgColor: "from-pink-200 via-purple-200 to-indigo-200"
  },
  {
    id: 2,
    title: "Hot Deal! 20% Off",
    subtitle: "On All Digital Paintings",
    bgColor: "from-rose-200 via-pink-200 to-purple-200"
  },
  {
    id: 3,
    title: "Artist Spotlight",
    subtitle: "Featured Artworks This Week",
    bgColor: "from-blue-200 via-cyan-200 to-teal-200"
  }
];

function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  // Optional: Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-80 overflow-hidden bg-gray-100">
      {bannerSlides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            opacity: index === currentSlide ? 1 : 0,
            transform: index === currentSlide ? 'translateX(0)' : index < currentSlide ? 'translateX(-100%)' : 'translateX(100%)',
            transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
            pointerEvents: index === currentSlide ? 'auto' : 'none'
          }}
        >
          <div className={`w-full h-full bg-gradient-to-r ${slide.bgColor} flex items-center justify-center`}>
            <div className="text-center px-4">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">
                {slide.title}
              </h2>
              <p className="text-2xl text-gray-700">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerCarousel;