const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Booking endpoints
  async createBooking(bookingData) {
    return this.request('/bookings', {
      method: 'POST',
      body: bookingData,
    });
  }

  async getAvailableSlots(date) {
    return this.request(`/bookings/availability/${date}`);
  }

  // Contact endpoints
  async submitContact(contactData) {
    return this.request('/contact', {
      method: 'POST',
      body: contactData,
    });
  }

  // Services endpoints
  async getServices() {
    return this.request('/services');
  }

  async getService(id) {
    return this.request(`/services/${id}`);
  }

  // Admin endpoints
  async adminLogin(credentials) {
    return this.request('/admin/login', {
      method: 'POST',
      body: credentials,
    });
  }

  async getDashboardStats(token) {
    return this.request('/admin/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async getRecentBookings(token) {
    return this.request('/admin/bookings/recent', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const apiService = new ApiService();