import { useEffect, useState } from "react";

export function EventsPage() {
  const [filter, setFilter] = useState("all");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pdfModal, setPdfModal] = useState({ isOpen: false, pdfUrl: null, title: null });

  const openPdfModal = (pdfUrl, title) => {
    setPdfModal({ isOpen: true, pdfUrl, title });
  };

  const closePdfModal = () => {
    setPdfModal({ isOpen: false, pdfUrl: null, title: null });
  };

  const loadEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch('/data/events.json');
      if (!response.ok) {
        throw new Error('Failed to fetch events data');
      }
      const allEvents = await response.json();
      const enabledEvents = allEvents.filter(e => e.enabled === true);
      setEvents(enabledEvents);
      setError(null);
    } catch (err) {
      setError('Failed to load events');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
    
    // Poll for changes every 2 seconds
    const interval = setInterval(loadEvents, 2000);
    return () => clearInterval(interval);
  }, []);

  const filtered = filter === "all"
    ? events
    : events.filter((e) => e.status === filter);

  if (loading) {
    return (
      <section id="events" className="page-section">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading events...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="events" className="page-section">
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="page-section">
      <Header
        title="All Community Events"
        subtitle="Join us in our upcoming gatherings and look back at our journey"
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["all", "upcoming", "ongoing", "previous"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                filter === t
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((e, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="mb-4">
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = '/assets/event-placeholder.jpg';
                  }}
                />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">
                {e.title}
              </h3>
              <div className="text-sm text-gray-600 mb-2">
                <p><strong>Date:</strong> {new Date(e.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {e.time}</p>
                <p><strong>Location:</strong> {e.location}</p>
              </div>
              <p className="text-sm text-gray-500 mb-3 capitalize">
                Status: {e.status} | Category: {e.category}
              </p>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {e.title.includes("Bangladesh Halal Expo") ? (
                  <div dangerouslySetInnerHTML={{ __html: e.content }} />
                ) : (
                  e.description
                )}
              </p>
              {e.pdf && (
                <button
                  onClick={() => openPdfModal(e.pdf, e.title)}
                  className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm mb-3"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    View PDF
                  </button>

              )}
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Capacity: {e.capacity}</span>
                <span>Registered: {e.registered}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {pdfModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closePdfModal} />
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative z-10 shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-primary">{pdfModal.title} - PDF Document</h3>
              <button
                onClick={closePdfModal}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex gap-4 mb-4">
                <a
                  href={pdfModal.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  Open in New Tab
                </a>
                <a
                  href={pdfModal.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                  </svg>
                  Download PDF
                </a>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src={pdfModal.pdfUrl}
                  className="w-full h-[600px]"
                  title={`${pdfModal.title} PDF`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const Header = ({ title, subtitle }) => (
  <div className="bg-primary py-12 text-white text-center">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="opacity-80 mt-2">{subtitle}</p>
  </div>
);
export default EventsPage;