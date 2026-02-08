export default function Modal({ isOpen, data, type, onClose }) {
  if (!isOpen || !data) return null;

  return (
    <div
      className="modal fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-slide-up flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors text-primary font-bold text-xl shadow-md z-20"
        >
          &times;
        </button>
        <div className="relative h-64 md:h-80 flex-shrink-0">
          <img
            src={data.image}
            onError={(e) =>
              (e.target.src = 'https://placehold.co/800x500?text=Image+Unavailable')
            }
            className="w-full h-full object-cover"
            alt="Header"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-8 right-8">
            <span className="bg-gold text-primary-dark px-3 py-1 rounded text-xs font-bold uppercase tracking-wide inline-block mb-2">
              {type === 'event' ? (data.status || 'EVENT') : 'NEWS UPDATE'}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight shadow-black drop-shadow-md">
              {data.title}
            </h2>
          </div>
        </div>
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-6">
            <span>📅 {data.date}</span>
            {type === 'event' && data.location && (
              <span>📍 {data.location}</span>
            )}
          </div>
          <div
            className="prose max-w-none text-gray-700 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </div>
  );
}
