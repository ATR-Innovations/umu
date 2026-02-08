import { useEffect, useRef, useState } from "react";

const galleryData = [
  {
    "id": 1,
    "title": "",
    "image": "assets/gallery-0142.jpg",
    "thumbnail": "/assets/gallery-078-thumb.jpg",
    "description": "Highlights from our annual conference",
    "category": "events",
    "date": "2025-11-15",
    "enabled": true,
    "featured": true,
    "uploadedBy": "Admin",
    "tags": ["conference", "2025", "gathering"]
  },
  {
    "id": 2,
    "title": "",
    "image": "/assets/saidi saheb.jpeg",
    "thumbnail": "/assets/gallery-0142-thumb.jpg",
    "description": "Our team engaging with the community",
    "category": "community",
    "date": "2025-10-20",
    "enabled": true,
    "featured": true,
    "uploadedBy": "Admin",
    "tags": ["community", "outreach", "volunteer"]
  },
  {
    "id": 3,
    "title": "Anti-terrorism Program",
    "image": "/assets/gallery-03.jpg",
    "thumbnail": "/assets/gallery-03-thumb.jpg",
    "description": "Students learning in our workshop",
    "category": "education",
    "date": "2025-09-10",
    "enabled": true,
    "featured": false,
    "uploadedBy": "Admin",
    "tags": ["education", "workshop", "learning"]
  },
  {
    "id": 4,
    "title": "Al-AQSA grand Mufti receaptions",
    "image": "/assets/gallery-04.jpg",
    "thumbnail": "/assets/gallery-04-thumb.jpg",
    "description": "Our dedicated team at the annual gathering",
    "category": "team",
    "date": "2025-08-15",
    "enabled": true,
    "featured": false,
    "uploadedBy": "Admin",
    "tags": ["team", "event", "celebration"]
  },
  {
    "id": 5,
    "title": "Public Ceremony in Moscow",
    "image": "/assets/gallery-081.jpg",
    "thumbnail": "/assets/gallery-081-thumb.jpg",
    "description": "Annual charity drive supporting local causes",
    "category": "charity",
    "date": "2025-07-22",
    "enabled": true,
    "featured": false,
    "uploadedBy": "Admin",
    "tags": ["charity", "donation", "community"]
  }
]

function GalleryCarouselSection() {
  const carouselRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadGallery = async () => {
    try {
      const allGallery = galleryData; //await galleryAPI.getAllGallery();
      const enabledGallery = allGallery.filter(g => g.enabled === true);
      setImages(enabledGallery.slice(0, 7)); // Show first 7
    } catch (err) {
      console.error('Error loading gallery:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGallery();
    
    // Poll for changes every 2 seconds
    const interval = setInterval(loadGallery, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleViewAllGallery = () => {
    window.location.href = '/gallery';
  };

  const scroll = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <section className="bg-gray-50 py-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-primary">
            Moments of Unity
          </h2>
          <button
            onClick={handleViewAllGallery}
            className="text-primary font-bold hover:text-gold transition-colors text-sm"
          >
            View All Photos →
          </button>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {images.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No gallery items available yet.</p>
            </div>
          ) : (
            <>
              <div
                ref={carouselRef}
                id="gallery-carousel"
                className="flex gap-4 overflow-x-auto snap-x scrollbar-hide pb-4"
              >
                {images.map((item) => (
                  <div
                    key={item.id}
                    className="flex-none w-72 h-80 relative rounded-xl overflow-hidden snap-center cursor-pointer group"
                    onClick={handleViewAllGallery}
                  >
                    <img
                      src={item.image}
                      onError={(e) =>
                        (e.target.src =
                          'https://placehold.co/500x600?text=' + encodeURIComponent(item.title))
                      }
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold text-lg">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                onClick={() => scroll(-300)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white text-primary z-10"
              >
                ←
              </button>
              <button
                onClick={() => scroll(300)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white text-primary z-10"
              >
                →
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default GalleryCarouselSection;
