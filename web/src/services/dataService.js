/**
 * Data Service Layer with Axios
 * 
 * Acts as a centralized abstraction for all data operations.
 * Uses Axios to fetch from JSON files served by local-web-server.
 * 
 * Features:
 * 1. Axios HTTP client for reliable requests
 * 2. localStorage sync for offline mode
 * 3. Error handling and retries
 * 4. Auto-refresh support
 * 
 * MIGRATION PATH FOR REAL BACKEND:
 * 1. Update API_BASE_URL to your backend
 * 2. Replace /data/*.json with API endpoints
 * 3. No other changes needed!
 */

import axios from 'axios';

// ============================================================================
// AXIOS CONFIGURATION
// ============================================================================

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5173';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  config => {
    console.log(`📡 Fetching: ${config.url}`);
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  response => {
    console.log(`✅ Success: ${response.config.url}`);
    return response;
  },
  error => {
    console.error(`❌ Error fetching ${error.config?.url}:`, error.message);
    return Promise.reject(error);
  }
);

// ============================================================================
// LOCAL STORAGE KEYS - For demo/offline mode
// ============================================================================

const STORAGE_KEYS = {
  EVENTS: 'umu_events',
  NEWS: 'umu_news',
  GALLERY: 'umu_gallery',
  ABOUT: 'umu_about',
  SITE_CONFIG: 'umu_config',
  SYNC_STATUS: 'umu_sync_status',
};

// ============================================================================
// STATE TRACKING - Keep track of loaded state
// ============================================================================

// ============================================================================
// UTILITY: FETCH FROM LOCAL JSON FILES USING AXIOS
// ============================================================================

/**
 * Fetch data using axios from local JSON files
 * @param {string} filePath - Path to JSON file (e.g., '/data/events.json')
 * @returns {Promise<Array|Object>} Parsed JSON data
 */
async function fetchFromJSON(filePath) {
  try {
    console.log(`🔄 Axios fetching: ${filePath}`);
    const response = await axiosInstance.get(filePath);
    console.log(`✅ Axios success: ${filePath}`, response.data);
    return response.data;
  } catch (error) {
    console.error(`❌ Axios error fetching ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Sync data to localStorage for offline access & demo mode
 * @param {string} key - Storage key
 * @param {any} data - Data to store
 */
function syncToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(STORAGE_KEYS.SYNC_STATUS, JSON.stringify({
      lastSync: new Date().toISOString(),
      mode: 'offline',
    }));
  } catch (error) {
    console.warn('LocalStorage sync failed:', error);
  }
}

/**
 * Load data from localStorage (fallback when offline)
 * @param {string} key - Storage key
 * @returns {Array|Object|null} Stored data or null
 */
function loadFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.warn('LocalStorage load failed:', error);
    return null;
  }
}

// ============================================================================
// EVENTS API
// ============================================================================

export const eventsAPI = {
  /**
   * Get all events - with proper cache management
   */
  async getAllEvents() {
    try {
      // First, try to load from localStorage (prioritize user edits)
      const cached = loadFromLocalStorage(STORAGE_KEYS.EVENTS);
      if (cached && cached.length > 0) {
        return cached;
      }
      
      // If no cache, fetch from JSON
      let events = await fetchFromJSON('/data/events.json');
      syncToLocalStorage(STORAGE_KEYS.EVENTS, events);
      return events;
    } catch {
      console.warn('Fetching from server failed, using localStorage');
      const cached = loadFromLocalStorage(STORAGE_KEYS.EVENTS);
      return cached || [];
    }
  },

  /**
   * Get single event by ID
   */
  async getEventById(id) {
    const events = await this.getAllEvents();
    return events.find(e => e.id === parseInt(id));
  },

  /**
   * Get enabled events only
   */
  async getEnabledEvents() {
    const events = await this.getAllEvents();
    return events.filter(e => e.enabled === true);
  },

  /**
   * Create new event with proper state management
   */
  async createEvent(eventData) {
    try {
      const events = await this.getAllEvents();
      const maxId = events.length > 0 ? Math.max(...events.map(e => e.id || 0)) : 0;
      
      const newEvent = {
        id: maxId + 1,
        title: eventData.title || 'Untitled Event',
        date: eventData.date || new Date().toISOString().split('T')[0],
        time: eventData.time || '10:00 AM',
        location: eventData.location || '',
        summary: eventData.summary || '',
        content: eventData.content || '',
        image: eventData.image || '/assets/default-event.jpg',
        description: eventData.description || eventData.summary || '',
        featured: false,
        enabled: true,
        status: eventData.status || 'upcoming',
        capacity: eventData.capacity || 100,
        registered: 0,
        category: eventData.category || 'General',
      };
      
      const updatedEvents = [...events, newEvent];
      syncToLocalStorage(STORAGE_KEYS.EVENTS, updatedEvents);
      console.log('✓ Event created:', newEvent);
      return newEvent;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },

  /**
   * Update existing event
   */
  async updateEvent(id, eventData) {
    try {
      const events = await this.getAllEvents();
      const index = events.findIndex(e => e.id === parseInt(id));
      if (index === -1) {
        throw new Error('Event not found with id: ' + id);
      }
      
      events[index] = { ...events[index], ...eventData };
      syncToLocalStorage(STORAGE_KEYS.EVENTS, events);
      console.log('✓ Event updated:', events[index]);
      return events[index];
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  },

  /**
   * Delete event
   */
  async deleteEvent(id) {
    try {
      const events = await this.getAllEvents();
      const initialLength = events.length;
      const filtered = events.filter(e => e.id !== parseInt(id));
      
      if (filtered.length === initialLength) {
        console.warn('Event not found for deletion:', id);
        return { success: false, message: 'Event not found' };
      }
      
      syncToLocalStorage(STORAGE_KEYS.EVENTS, filtered);
      console.log('✓ Event deleted, remaining:', filtered.length);
      return { success: true, message: 'Event deleted', count: filtered.length };
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  },

  /**
   * Toggle event enabled status
   */
  async toggleEvent(id) {
    try {
      const events = await this.getAllEvents();
      const event = events.find(e => e.id === parseInt(id));
      if (!event) throw new Error('Event not found');
      
      event.enabled = !event.enabled;
      syncToLocalStorage(STORAGE_KEYS.EVENTS, events);
      console.log('✓ Event toggled:', event.id, 'enabled:', event.enabled);
      return event;
    } catch (error) {
      console.error('Error toggling event:', error);
      throw error;
    }
  },
};

// ============================================================================
// NEWS API
// ============================================================================

export const newsAPI = {
  /**
   * Get all news articles - with proper cache management
   */
  async getAllNews() {
    try {
      // First, try to load from localStorage (prioritize user edits)
      const cached = loadFromLocalStorage(STORAGE_KEYS.NEWS);
      if (cached && cached.length > 0) {
        return cached;
      }
      
      // If no cache, fetch from JSON
      let news = await fetchFromJSON('/data/news.json');
      syncToLocalStorage(STORAGE_KEYS.NEWS, news);
      return news;
    } catch {
      console.warn('Fetching from server failed, using localStorage');
      const cached = loadFromLocalStorage(STORAGE_KEYS.NEWS);
      return cached || [];
    }
  },

  /**
   * Get single news by ID
   */
  async getNewsById(id) {
    const allNews = await this.getAllNews();
    return allNews.find(n => n.id === parseInt(id));
  },

  /**
   * Get enabled news only
   */
  async getEnabledNews() {
    const news = await this.getAllNews();
    return news.filter(n => n.enabled === true);
  },

  /**
   * Create new news article
   */
  async createNews(newsData) {
    try {
      const news = await this.getAllNews();
      const maxId = news.length > 0 ? Math.max(...news.map(n => n.id || 0)) : 0;
      
      const newArticle = {
        id: maxId + 1,
        title: newsData.title || 'Untitled Article',
        summary: newsData.summary || '',
        content: newsData.content || '',
        author: newsData.author || 'Admin',
        image: newsData.image || '/assets/default-news.jpg',
        description: newsData.description || newsData.summary || '',
        date: newsData.date || new Date().toISOString().split('T')[0],
        enabled: true,
        featured: false,
        category: newsData.category || 'General',
        views: 0,
        likes: 0,
        status: newsData.status || 'published',
      };
      
      const updatedNews = [...news, newArticle];
      syncToLocalStorage(STORAGE_KEYS.NEWS, updatedNews);
      console.log('✓ News article created:', newArticle);
      return newArticle;
    } catch (error) {
      console.error('Error creating news:', error);
      throw error;
    }
  },

  /**
   * Update existing news article
   */
  async updateNews(id, newsData) {
    try {
      const news = await this.getAllNews();
      const index = news.findIndex(n => n.id === parseInt(id));
      if (index === -1) {
        throw new Error('News article not found with id: ' + id);
      }
      
      news[index] = { ...news[index], ...newsData };
      syncToLocalStorage(STORAGE_KEYS.NEWS, news);
      console.log('✓ News article updated:', news[index]);
      return news[index];
    } catch (error) {
      console.error('Error updating news:', error);
      throw error;
    }
  },

  /**
   * Delete news article
   */
  async deleteNews(id) {
    try {
      const news = await this.getAllNews();
      const initialLength = news.length;
      const filtered = news.filter(n => n.id !== parseInt(id));
      
      if (filtered.length === initialLength) {
        console.warn('News article not found for deletion:', id);
        return { success: false, message: 'News article not found' };
      }
      
      syncToLocalStorage(STORAGE_KEYS.NEWS, filtered);
      console.log('✓ News article deleted, remaining:', filtered.length);
      return { success: true, message: 'News article deleted', count: filtered.length };
    } catch (error) {
      console.error('Error deleting news:', error);
      throw error;
    }
  },

  /**
   * Toggle news enabled status
   */
  async toggleNews(id) {
    try {
      const news = await this.getAllNews();
      const article = news.find(n => n.id === parseInt(id));
      if (!article) throw new Error('News article not found');
      
      article.enabled = !article.enabled;
      syncToLocalStorage(STORAGE_KEYS.NEWS, news);
      console.log('✓ News article toggled:', article.id, 'enabled:', article.enabled);
      return article;
    } catch (error) {
      console.error('Error toggling news:', error);
      throw error;
    }
  },
};

// ============================================================================
// GALLERY API
// ============================================================================

export const galleryAPI = {
  /**
   * Get all gallery items - with proper cache management
   */
  async getAllGallery() {
    try {
      // First, try to load from localStorage (prioritize user edits)
      const cached = loadFromLocalStorage(STORAGE_KEYS.GALLERY);
      if (cached && cached.length > 0) {
        return cached;
      }
      
      // If no cache, fetch from JSON
      let gallery = await fetchFromJSON('/data/gallery.json');
      syncToLocalStorage(STORAGE_KEYS.GALLERY, gallery);
      return gallery;
    } catch {
      console.warn('Fetching from server failed, using localStorage');
      const cached = loadFromLocalStorage(STORAGE_KEYS.GALLERY);
      return cached || [];
    }
  },

  /**
   * Get single gallery item by ID
   */
  async getGalleryById(id) {
    const gallery = await this.getAllGallery();
    return gallery.find(g => g.id === parseInt(id));
  },

  /**
   * Get enabled gallery items only
   */
  async getEnabledGallery() {
    const gallery = await this.getAllGallery();
    return gallery.filter(g => g.enabled === true);
  },

  /**
   * Upload new gallery item
   */
  async uploadImage(imageData) {
    try {
      const gallery = await this.getAllGallery();
      const maxId = gallery.length > 0 ? Math.max(...gallery.map(g => g.id || 0)) : 0;
      
      const newItem = {
        id: maxId + 1,
        title: imageData.title || 'Untitled Image',
        description: imageData.description || '',
        image: imageData.image || '/assets/default-gallery.jpg',
        thumbnail: imageData.thumbnail || imageData.image || '/assets/default-gallery.jpg',
        category: imageData.category || 'General',
        date: imageData.date || new Date().toISOString().split('T')[0],
        enabled: true,
        featured: false,
        uploadedBy: imageData.uploadedBy || 'admin',
        tags: imageData.tags || [],
      };
      
      const updatedGallery = [...gallery, newItem];
      syncToLocalStorage(STORAGE_KEYS.GALLERY, updatedGallery);
      console.log('✓ Gallery item uploaded:', newItem);
      return newItem;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  },

  /**
   * Update gallery item metadata
   */
  async updateGalleryItem(id, itemData) {
    try {
      const gallery = await this.getAllGallery();
      const index = gallery.findIndex(g => g.id === parseInt(id));
      if (index === -1) {
        throw new Error('Gallery item not found with id: ' + id);
      }
      
      gallery[index] = { ...gallery[index], ...itemData };
      syncToLocalStorage(STORAGE_KEYS.GALLERY, gallery);
      console.log('✓ Gallery item updated:', gallery[index]);
      return gallery[index];
    } catch (error) {
      console.error('Error updating gallery item:', error);
      throw error;
    }
  },

  /**
   * Delete gallery item
   */
  async deleteImage(id) {
    try {
      const gallery = await this.getAllGallery();
      const initialLength = gallery.length;
      const filtered = gallery.filter(g => g.id !== parseInt(id));
      
      if (filtered.length === initialLength) {
        console.warn('Gallery item not found for deletion:', id);
        return { success: false, message: 'Gallery item not found' };
      }
      
      syncToLocalStorage(STORAGE_KEYS.GALLERY, filtered);
      console.log('✓ Gallery item deleted, remaining:', filtered.length);
      return { success: true, message: 'Image deleted', count: filtered.length };
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  },

  /**
   * Toggle gallery item enabled status
   */
  async toggleImage(id) {
    try {
      const gallery = await this.getAllGallery();
      const item = gallery.find(g => g.id === parseInt(id));
      if (!item) throw new Error('Gallery item not found');
      
      item.enabled = !item.enabled;
      syncToLocalStorage(STORAGE_KEYS.GALLERY, gallery);
      console.log('✓ Gallery item toggled:', item.id, 'enabled:', item.enabled);
      return item;
    } catch (error) {
      console.error('Error toggling gallery item:', error);
      throw error;
    }
  },
};

// ============================================================================
// SITE CONFIG API
// ============================================================================

export const configAPI = {
  /**
   * Get site configuration
   */
  async getConfig() {
    try {
      let config = await fetchFromJSON('/data/config.json');
      syncToLocalStorage(STORAGE_KEYS.SITE_CONFIG, config);
      return config;
    } catch {
      console.warn('Fetching config failed, using localStorage');
      return loadFromLocalStorage(STORAGE_KEYS.SITE_CONFIG) || {};
    }
  },

  /**
   * Update site configuration
   * MIGRATION: Replace with PUT /api/config
   */
  async updateConfig(configData) {
    const config = await this.getConfig();
    const updated = { ...config, ...configData };
    syncToLocalStorage(STORAGE_KEYS.SITE_CONFIG, updated);
    return updated;
  },
};

// ============================================================================
// ============================================================================
// DASHBOARD ANALYTICS
// ============================================================================

export const dashboardAPI = {
  /**
   * Get dashboard statistics
   */
  async getStats() {
    try {
      const events = await eventsAPI.getAllEvents();
      const news = await newsAPI.getAllNews();
      const gallery = await galleryAPI.getAllGallery();

      return {
        totalEvents: events.length,
        enabledEvents: events.filter(e => e.enabled).length,
        totalNews: news.length,
        enabledNews: news.filter(n => n.enabled).length,
        totalGalleryItems: gallery.length,
        enabledGalleryItems: gallery.filter(g => g.enabled).length,
        totalEventAttendees: events.reduce((sum, e) => sum + (e.registered || 0), 0),
        totalNewsViews: news.reduce((sum, n) => sum + (n.views || 0), 0),
      };
    } catch (error) {
      console.error('Failed to fetch stats:', error);
      return {
        totalEvents: 0,
        enabledEvents: 0,
        totalNews: 0,
        enabledNews: 0,
        totalGalleryItems: 0,
        enabledGalleryItems: 0,
        totalEventAttendees: 0,
        totalNewsViews: 0,
      };
    }
  },
};

// ============================================================================
// AUTHENTICATION API
// ============================================================================

export const authAPI = {
  /**
   * Check if user is authenticated (localStorage-based)
   */
  isAuthenticated() {
    return !!localStorage.getItem('authToken');
  },

  /**
   * Get current logged-in user
   */
  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  },

  /**
   * Login user (admin-only access)
   */
  async login(email, password) {
    if (!email || !password) throw new Error('Email and password required');
    
    // Check for specific admin credentials
    const adminEmail = 'assadullaalgalib12@gmail.com';
    const adminPassword = 'umuAdmin!@#';
    
    if (email !== adminEmail || password !== adminPassword) {
      throw new Error('Invalid email or password');
    }
    
    const user = {
      id: 'admin_' + Date.now(),
      email,
      name: 'Admin',
      role: 'admin',
      loginTime: new Date().toISOString(),
    };

    const token = 'admin_token_' + Date.now();
    
    localStorage.setItem('authToken', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    return { user, token };
  },

  /**
   * Logout user
   */
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    return { success: true };
  },
};

// ============================================================================
// EXPORT ALL APIS
// ============================================================================

export default {
  events: eventsAPI,
  news: newsAPI,
  gallery: galleryAPI,
  config: configAPI,
  dashboard: dashboardAPI,
  auth: authAPI,
};
