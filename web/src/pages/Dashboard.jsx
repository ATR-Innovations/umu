import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiPlus, FiEdit2, FiTrash2, FiUpload, FiMenu, FiX, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { eventsAPI, newsAPI, galleryAPI, dashboardAPI, authAPI } from '../services/dataService';
import DashboardNav from '../components/DashboardNav';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [events, setEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [news, setNews] = useState([]);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionMessage, setActionMessage] = useState(null);

  // Form states
  const [eventForm, setEventForm] = useState({
    title: '', date: '', status: 'upcoming', location: '', summary: '', content: ''
  });
  const [editingEvent, setEditingEvent] = useState(null);
  const [newsForm, setNewsForm] = useState({
    title: '', summary: '', content: '', author: ''
  });
  const [editingNews, setEditingNews] = useState(null);
  const [editingGallery, setEditingGallery] = useState(null);
  const [galleryForm, setGalleryForm] = useState({
    title: '', description: ''
  });

  // Fetch data on component mount
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authAPI.isAuthenticated();
      if (!isAuth) {
        navigate('/login');
        return;
      }
      
      const currentUser = await authAPI.getCurrentUser();
      setUser(currentUser);
      
      await loadDashboardData();
      setLoading(false);
    };
    
    checkAuth();
  }, [navigate]);

  const loadDashboardData = async () => {
    try {
      const [statsData, eventsData, galleryData, newsData] = await Promise.all([
        dashboardAPI.getStats(),
        eventsAPI.getAllEvents(),
        galleryAPI.getAllGallery(),
        newsAPI.getAllNews(),
      ]);

      setStats(statsData);
      setEvents(eventsData || []);
      setGallery(galleryData || []);
      setNews(newsData || []);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  const handleLogout = () => {
    authAPI.logout();
    navigate('/');
  };

  // ==================== EVENT HANDLERS ====================
  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.date) {
      setActionMessage({ type: 'error', text: 'Please fill in title and date' });
      setTimeout(() => setActionMessage(null), 3000);
      return;
    }

    try {
      setActionLoading(true);
      const newEvent = await eventsAPI.createEvent({
        title: eventForm.title,
        date: eventForm.date,
        status: eventForm.status,
        location: eventForm.location,
        summary: eventForm.summary,
        content: eventForm.content,
        image: '/assets/default-event.jpg',
      });

      setEvents([...events, newEvent]);
      setEventForm({ title: '', date: '', status: 'upcoming', location: '', summary: '', content: '' });
      setActionMessage({ type: 'success', text: '✓ Event added successfully!' });
      setTimeout(() => setActionMessage(null), 3000);
      console.log('Event added:', newEvent);
    } catch (error) {
      console.error('Error adding event:', error);
      setActionMessage({ type: 'error', text: 'Error adding event: ' + error.message });
      setTimeout(() => setActionMessage(null), 3000);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        setActionLoading(true);
        await eventsAPI.deleteEvent(id);
        const updated = events.filter(e => e.id !== id);
        setEvents(updated);
        setActionMessage({ type: 'success', text: '✓ Event deleted!' });
        setTimeout(() => setActionMessage(null), 3000);
        console.log('Event deleted:', id);
      } catch (error) {
        console.error('Error deleting event:', error);
        setActionMessage({ type: 'error', text: 'Error deleting event' });
        setTimeout(() => setActionMessage(null), 3000);
      } finally {
        setActionLoading(false);
      }
    }
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setEventForm({
      title: event.title,
      date: event.date,
      status: event.status,
      location: event.location,
      summary: event.summary,
      content: event.content,
    });
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.date) {
      setActionMessage({ type: 'error', text: 'Please fill in title and date' });
      setTimeout(() => setActionMessage(null), 3000);
      return;
    }

    try {
      setActionLoading(true);
      const updatedEvent = await eventsAPI.updateEvent(editingEvent.id, {
        title: eventForm.title,
        date: eventForm.date,
        status: eventForm.status,
        location: eventForm.location,
        summary: eventForm.summary,
        content: eventForm.content,
      });

      const updatedEvents = events.map(e => e.id === editingEvent.id ? updatedEvent : e);
      setEvents(updatedEvents);
      setEventForm({ title: '', date: '', status: 'upcoming', location: '', summary: '', content: '' });
      setEditingEvent(null);
      setActionMessage({ type: 'success', text: '✓ Event updated successfully!' });
      setTimeout(() => setActionMessage(null), 3000);
      console.log('Event updated:', updatedEvent);
    } catch (error) {
      console.error('Error updating event:', error);
      setActionMessage({ type: 'error', text: 'Error updating event: ' + error.message });
      setTimeout(() => setActionMessage(null), 3000);
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingEvent(null);
    setEventForm({ title: '', date: '', status: 'upcoming', location: '', summary: '', content: '' });
  };

  // ==================== GALLERY HANDLERS ====================
  const handleUploadImage = async (e) => {
    e.preventDefault();
    const fileInput = e.target.querySelector('input[type="file"]');
    if (!fileInput || !fileInput.files.length) {
      setActionMessage({ type: 'error', text: 'Please select an image' });
      setTimeout(() => setActionMessage(null), 3000);
      return;
    }

    try {
      setActionLoading(true);
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('file', file);

      const newImage = await galleryAPI.uploadImage({
        title: e.target.querySelector('input[name="title"]')?.value || 'Untitled',
        description: e.target.querySelector('input[name="description"]')?.value || '',
        // image: `/assets/gallery-${Date.now()}.jpg`,
        image: `/assets/${file.name}`,
      });

      setGallery([...gallery, newImage]);
      e.target.reset();
      setActionMessage({ type: 'success', text: '✓ Image uploaded successfully!' });
      setTimeout(() => setActionMessage(null), 3000);
      console.log('Image uploaded:', newImage);
    } catch (error) {
      console.error('Error uploading image:', error);
      setActionMessage({ type: 'error', text: 'Error uploading image: ' + error.message });
      setTimeout(() => setActionMessage(null), 3000);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteImage = async (id) => {
    if (window.confirm('Delete this image?')) {
      try {
        setActionLoading(true);
        await galleryAPI.deleteImage(id);
        const updated = gallery.filter(g => g.id !== id);
        setGallery(updated);
        setActionMessage({ type: 'success', text: '✓ Image deleted!' });
        setTimeout(() => setActionMessage(null), 3000);
        console.log('Image deleted:', id);
      } catch (error) {
        console.error('Error deleting image:', error);
        setActionMessage({ type: 'error', text: 'Error deleting image' });
        setTimeout(() => setActionMessage(null), 3000);
      } finally {
        setActionLoading(false);
      }
    }
  };

  const handleEditGallery = (item) => {
    setEditingGallery(item);
    setGalleryForm({
      title: item.title,
      description: item.description,
    });
  };

  const handleUpdateGallery = async (e) => {
    e.preventDefault();
    if (!galleryForm.title) {
      setActionMessage({ type: 'error', text: 'Please fill in title' });
      setTimeout(() => setActionMessage(null), 3000);
      return;
    }

    try {
      setActionLoading(true);
      const updatedItem = await galleryAPI.updateGalleryItem(editingGallery.id, {
        title: galleryForm.title,
        description: galleryForm.description,
      });

      const updatedGallery = gallery.map(g => g.id === editingGallery.id ? updatedItem : g);
      setGallery(updatedGallery);
      setGalleryForm({ title: '', description: '' });
      setEditingGallery(null);
      setActionMessage({ type: 'success', text: '✓ Gallery item updated successfully!' });
      setTimeout(() => setActionMessage(null), 3000);
      console.log('Gallery updated:', updatedItem);
    } catch (error) {
      console.error('Error updating gallery:', error);
      setActionMessage({ type: 'error', text: 'Error updating gallery: ' + error.message });
      setTimeout(() => setActionMessage(null), 3000);
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancelEditGallery = () => {
    setEditingGallery(null);
    setGalleryForm({ title: '', description: '' });
  };

  // ==================== NEWS HANDLERS ====================
  const handleAddNews = async (e) => {
    e.preventDefault();
    if (!newsForm.title || !newsForm.content) {
      setActionMessage({ type: 'error', text: 'Please fill in title and content' });
      setTimeout(() => setActionMessage(null), 3000);
      return;
    }

    try {
      setActionLoading(true);
      const newNews = await newsAPI.createNews({
        title: newsForm.title,
        summary: newsForm.summary,
        content: newsForm.content,
        author: newsForm.author,
        image: '/assets/default-news.jpg',
        status: 'published',
      });

      setNews([...news, newNews]);
      setNewsForm({ title: '', summary: '', content: '', author: '' });
      setActionMessage({ type: 'success', text: '✓ News article added successfully!' });
      setTimeout(() => setActionMessage(null), 3000);
      console.log('News added:', newNews);
    } catch (error) {
      console.error('Error adding news:', error);
      setActionMessage({ type: 'error', text: 'Error adding news: ' + error.message });
      setTimeout(() => setActionMessage(null), 3000);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteNews = async (id) => {
    if (window.confirm('Delete this news article?')) {
      try {
        setActionLoading(true);
        await newsAPI.deleteNews(id);
        const updated = news.filter(n => n.id !== id);
        setNews(updated);
        setActionMessage({ type: 'success', text: '✓ News article deleted!' });
        setTimeout(() => setActionMessage(null), 3000);
        console.log('News deleted:', id);
      } catch (error) {
        console.error('Error deleting news:', error);
        setActionMessage({ type: 'error', text: 'Error deleting news' });
        setTimeout(() => setActionMessage(null), 3000);
      } finally {
        setActionLoading(false);
      }
    }
  };

  const handleEditNews = (article) => {
    setEditingNews(article);
    setNewsForm({
      title: article.title,
      summary: article.summary,
      content: article.content,
      author: article.author,
    });
  };

  const handleUpdateNews = async (e) => {
    e.preventDefault();
    if (!newsForm.title || !newsForm.content) {
      setActionMessage({ type: 'error', text: 'Please fill in title and content' });
      setTimeout(() => setActionMessage(null), 3000);
      return;
    }

    try {
      setActionLoading(true);
      const updatedNewsItem = await newsAPI.updateNews(editingNews.id, {
        title: newsForm.title,
        summary: newsForm.summary,
        content: newsForm.content,
        author: newsForm.author,
      });

      const updatedNewsList = news.map(n => n.id === editingNews.id ? updatedNewsItem : n);
      setNews(updatedNewsList);
      setNewsForm({ title: '', summary: '', content: '', author: '' });
      setEditingNews(null);
      setActionMessage({ type: 'success', text: '✓ News article updated successfully!' });
      setTimeout(() => setActionMessage(null), 3000);
      console.log('News updated:', updatedNewsItem);
    } catch (error) {
      console.error('Error updating news:', error);
      setActionMessage({ type: 'error', text: 'Error updating news: ' + error.message });
      setTimeout(() => setActionMessage(null), 3000);
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancelEditNews = () => {
    setEditingNews(null);
    setNewsForm({ title: '', summary: '', content: '', author: '' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-sky-light flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-primary font-semibold">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-light">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="md:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-lg"
      >
        {showMobileNav ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Action Message Toast */}
      {actionMessage && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-40 max-w-sm ${
          actionMessage.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {actionMessage.text}
        </div>
      )}

      <div className="flex gap-0 md:gap-6 min-h-screen">
        {/* Sidebar */}
        <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} setShowMobileNav={setShowMobileNav} />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 md:mr-6 mb-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 mt-12 md:mt-0">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-primary mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome back, <span className="font-bold">{user?.name}</span>!</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition"
            >
              <FiLogOut size={20} /> Logout
            </button>
          </div>

          {/* ===== OVERVIEW TAB ===== */}
          {activeTab === 'overview' && (
            <div>
              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {stats && [
                  { label: 'Total Events', value: stats.totalEvents, icon: '📅', color: 'primary' },
                  { label: 'Total News', value: stats.totalNews, icon: '📰', color: 'gold' },
                  { label: 'Gallery Items', value: stats.totalGalleryItems, icon: '🖼️', color: 'green-600' },
                  { label: 'Dashboard', value: 'Live', icon: '✨', color: 'blue-600' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm font-semibold mb-1">{stat.label}</p>
                        <p className="text-3xl font-black text-primary">{stat.value}</p>
                      </div>
                      <div className="text-4xl">{stat.icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-black text-primary mb-6">Quick Actions</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { action: 'events', label: 'Add Event', icon: '📅' },
                    { action: 'gallery', label: 'Upload Image', icon: '🖼️' },
                    { action: 'news', label: 'Write News', icon: '📰' },
                    { action: 'about', label: 'Edit About', icon: '📝' },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(item.action)}
                      className="bg-[#246B3B] bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-lg hover:shadow-lg transition transform hover:-translate-y-1 text-center"
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="font-bold">{item.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== ABOUT TAB ===== */}
          {activeTab === 'about' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-black text-primary mb-6">About Page Content</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-blue-900">
                <p className="mb-2"><strong>ℹ️ Coming Soon:</strong> About page content management will be available in the next update.</p>
                <p>This section will allow you to edit your organization's About, Mission, and Vision statements.</p>
              </div>
            </div>
          )}

          {/* ===== EVENTS TAB ===== */}
          {activeTab === 'events' && (
            <div>
              {/* Add/Edit Event Form */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-black text-primary mb-6">
                  {editingEvent ? 'Edit Event' : 'Add New Event'}
                </h2>
                <form onSubmit={editingEvent ? handleUpdateEvent : handleAddEvent} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Event Title *"
                      value={eventForm.title}
                      onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    />
                    <input
                      type="date"
                      value={eventForm.date}
                      onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={eventForm.location}
                      onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    />
                    <select
                      value={eventForm.status}
                      onChange={(e) => setEventForm({ ...eventForm, status: e.target.value })}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    >
                      <option value="upcoming">Upcoming</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="previous">Previous</option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Short Summary"
                    value={eventForm.summary}
                    onChange={(e) => setEventForm({ ...eventForm, summary: e.target.value })}
                    rows="2"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none resize-none"
                  />

                  <textarea
                    placeholder="Event Details/Content"
                    value={eventForm.content}
                    onChange={(e) => setEventForm({ ...eventForm, content: e.target.value })}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none resize-none"
                  />

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={actionLoading}
                      className="bg-[#8D8325] bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition"
                    >
                      <FiPlus size={20} /> {actionLoading ? (editingEvent ? 'Updating...' : 'Adding...') : (editingEvent ? 'Update Event' : 'Add Event')}
                    </button>
                    {editingEvent && (
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold transition"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Events List */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-black text-primary mb-6">All Events ({events.length})</h3>
                <div className="space-y-3">
                  {events.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No events yet. Create one above!</p>
                  ) : (
                    events.map(event => (
                      <div key={event.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gold transition">
                        <div className="flex-1">
                          <h4 className="font-bold text-primary">{event.title}</h4>
                          <p className="text-sm text-gray-600">{event.date} • {event.location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full capitalize">{event.status}</span>
                          <button
                            onClick={() => handleEditEvent(event)}
                            className="text-blue-600 hover:text-blue-800 p-2"
                          >
                            <FiEdit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteEvent(event.id)}
                            className="text-red-600 hover:text-red-800 p-2"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ===== GALLERY TAB ===== */}
          {activeTab === 'gallery' && (
            <div>
              {/* Upload Form */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-black text-primary mb-6">Upload Gallery Image</h2>
                <form onSubmit={handleUploadImage} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Select Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    name="title"
                    placeholder="Image Title"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                  />

                  <textarea
                    name="description"
                    placeholder="Image Description"
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none resize-none"
                  />

                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="bg-[#8D8325] bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition"
                  >
                    <FiUpload size={20} /> {actionLoading ? 'Uploading...' : 'Upload Image'}
                  </button>
                </form>
              </div>

              {/* Edit Form */}
              {editingGallery && (
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-black text-primary mb-6">Edit Gallery Item</h2>
                  <form onSubmit={handleUpdateGallery} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Image Title *"
                      value={galleryForm.title}
                      onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    />

                    <textarea
                      placeholder="Image Description"
                      value={galleryForm.description}
                      onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                      rows="3"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none resize-none"
                    />

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        disabled={actionLoading}
                        className="bg-[#8D8325] bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition"
                      >
                        <FiEdit2 size={20} /> {actionLoading ? 'Updating...' : 'Update Item'}
                      </button>
                      <button
                        type="button"
                        onClick={handleCancelEditGallery}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Gallery Grid */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-black text-primary mb-6">Gallery Images ({gallery.length})</h3>
                {gallery.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No images in gallery. Upload one above!</p>
                ) : (
                  <div className="grid md:grid-cols-3 gap-6">
                    {gallery.map(item => (
                      <div key={item.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                        <div className="h-48 bg-gray-200 relative">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" onError={(e) => e.target.src = '/assets/placeholder.jpg'} />
                          <div className="absolute top-2 right-2 flex gap-1">
                            <button
                              onClick={() => handleEditGallery(item)}
                              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                            >
                              <FiEdit2 size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteImage(item.id)}
                              className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-primary">{item.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{item.description?.substring(0, 50)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ===== NEWS TAB ===== */}
          {activeTab === 'news' && (
            <div>
              {/* Add/Edit News Form */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-black text-primary mb-6">
                  {editingNews ? 'Edit News Article' : 'Write News Article'}
                </h2>
                <form onSubmit={editingNews ? handleUpdateNews : handleAddNews} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Article Title *"
                    value={newsForm.title}
                    onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Author Name"
                    value={newsForm.author}
                    onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                  />

                  <textarea
                    placeholder="Article Summary"
                    value={newsForm.summary}
                    onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })}
                    rows="2"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none resize-none"
                  />

                  <textarea
                    placeholder="Full Article Content *"
                    value={newsForm.content}
                    onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                    rows="6"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none resize-none"
                  />

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={actionLoading}
                      className="bg-[#8D8325] bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition"
                    >
                      <FiPlus size={20} /> {actionLoading ? (editingNews ? 'Updating...' : 'Publishing...') : (editingNews ? 'Update Article' : 'Publish Article')}
                    </button>
                    {editingNews && (
                      <button
                        type="button"
                        onClick={handleCancelEditNews}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold transition"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* News List */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-black text-primary mb-6">All Articles ({news.length})</h3>
                <div className="space-y-3">
                  {news.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No articles yet. Write one above!</p>
                  ) : (
                    news.map(article => (
                      <div key={article.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gold transition">
                        <div className="flex-1">
                          <h4 className="font-bold text-primary">{article.title}</h4>
                          <p className="text-sm text-gray-600">By {article.author || 'Unknown'} • {article.summary?.substring(0, 50)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditNews(article)}
                            className="text-blue-600 hover:text-blue-800 p-2"
                          >
                            <FiEdit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteNews(article.id)}
                            className="text-red-600 hover:text-red-800 p-2"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}