import { useCallback, useEffect, useState } from 'react';
import Pagination from './Pagination';

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const itemsPerPage = 20;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
    );
  }, [galleryData.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
    );
  }, [galleryData.length]);

  const loadGallery = async () => {
    try {
      const response = await fetch('/data/gallery.json');
      if (!response.ok) {
        throw new Error('Failed to fetch gallery data');
      }
      const data = await response.json();
      const enabledGallery = data.filter(g => g.enabled === true);
      setGalleryData(enabledGallery);
    } catch (err) {
      console.error('Error loading gallery:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGallery();
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, nextImage, prevImage]);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedGallery = galleryData.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen">
      <div className="bg-primary py-12 text-white text-center">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="opacity-80 mt-2">
          Moments captured from around the world
        </p>
      </div>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {paginatedGallery.map((item, index) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer aspect-square"
              onClick={() => openLightbox(startIdx + index)}
            >
              <img
                src={item.image}
                onError={(e) =>
                  (e.target.src =
                    'https://placehold.co/600x600?text=Image+Unavailable')
                }
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-center p-2">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          total={galleryData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={galleryData[currentImageIndex]?.image}
              alt={galleryData[currentImageIndex]?.title}
              className="max-w-full max-h-full object-contain"
              onError={(e) =>
                (e.target.src = 'https://placehold.co/800x600?text=Image+Unavailable')
              }
            />

            {/* Image title */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-semibold bg-black/50 px-4 py-2 rounded">
                {galleryData[currentImageIndex]?.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}