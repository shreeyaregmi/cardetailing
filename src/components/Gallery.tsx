import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://images.pexels.com/photos/3807410/pexels-photo-3807410.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Luxury car exterior detailing",
      category: "Exterior"
    },
    {
      src: "https://images.pexels.com/photos/5365911/pexels-photo-5365911.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Premium interior cleaning",
      category: "Interior"
    },
    {
      src: "https://images.pexels.com/photos/6870304/pexels-photo-6870304.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Paint correction work",
      category: "Paint Correction"
    },
    {
      src: "https://images.pexels.com/photos/3811844/pexels-photo-3811844.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Ceramic coating application",
      category: "Ceramic Coating"
    },
    {
      src: "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Complete detail service",
      category: "Complete Detail"
    },
    {
      src: "https://images.pexels.com/photos/3807235/pexels-photo-3807235.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Paint protection film",
      category: "PPF"
    },
    {
      src: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Window tinting service",
      category: "Window Tinting"
    },
    {
      src: "https://images.pexels.com/photos/6872148/pexels-photo-6872148.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Engine bay detailing",
      category: "Engine Detail"
    },
    {
      src: "https://images.pexels.com/photos/5365918/pexels-photo-5365918.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Interior leather treatment",
      category: "Interior"
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformations we've achieved. Every vehicle tells a story of craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => openModal(image, index)}
            >
              <div className="aspect-square">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-semibold mb-2">{image.category}</h3>
                  <p className="text-sm">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img 
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{selectedImage.category}</h3>
                <p className="text-gray-300">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;