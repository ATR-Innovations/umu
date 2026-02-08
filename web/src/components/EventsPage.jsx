import { useEffect, useState } from 'react';
import Pagination from './Pagination';

export default function EventsPage({ onOpenModal = () => {} }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('all');
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pdfModal, setPdfModal] = useState({ isOpen: false, pdfUrl: null, title: null });
  const itemsPerPage = 6;

  const openPdfModal = (pdfUrl, title) => {
    setPdfModal({ isOpen: true, pdfUrl, title });
  };

  const closePdfModal = () => {
    setPdfModal({ isOpen: false, pdfUrl: null, title: null });
  };

  const filteredEvents =
    filterStatus === 'all'
      ? eventsData
      : eventsData.filter((event) => event.status === filterStatus);
  
  const loadEvents = async () => {
    try {
      const response = await fetch('/data/events.json');
      if (!response.ok) {
        throw new Error('Failed to fetch events data');
      }
      const data = await response.json();
      const enabledEvents = data.filter(event => event.enabled === true);
      setEventsData(enabledEvents);
    } catch (err) {
      console.error('Error loading events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = filteredEvents.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    setCurrentPage(1);
  };

  if (loading || !eventsData) {
    return (
      <section className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading events...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen">
      <div className="bg-primary py-12 text-white text-center">
        <h1 className="text-4xl font-bold">All Community Events</h1>
        <p className="opacity-80 mt-2">
          Join us in our upcoming gatherings and look back at our journey
        </p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['all', 'upcoming', 'ongoing', 'previous'].map((status) => (
            <button
              key={status}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                filterStatus === status
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              onClick={() => handleFilterChange(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)} Events
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedEvents.map((event) => {
            let badgeColor = 'bg-gray-500';
            if (event.status === 'upcoming')
              badgeColor = 'bg-gold text-primary-dark';
            if (event.status === 'ongoing')
              badgeColor = 'bg-green-600 text-white';

            return (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    onError={(e) =>
                      (e.target.src =
                        'https://placehold.co/800x500?text=Image+Unavailable')
                    }
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-4 right-4 ${badgeColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm`}
                  >
                    {event.status}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-gray-500 font-bold mb-2 flex items-center gap-2">
                    <span>📅 {event.date}</span>
                    <span>•</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                    {event.summary}
                  </p>
                  {event.pdf && (
                    <button
                      onClick={() => openPdfModal(event.pdf, event.title)}
                      className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm mb-3"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      View PDF
                    </button>
                  )}
                  <button
                    onClick={() => onOpenModal('event', event)}
                    className="text-primary font-bold text-sm hover:text-gold transition-colors text-left"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {paginatedEvents.length > 0 && (
          <Pagination
            total={filteredEvents.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onChange={setCurrentPage}
          />
        )}

        {paginatedEvents.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            No events found.
          </div>
        )}
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
