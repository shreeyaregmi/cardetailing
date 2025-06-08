// In a real application, this would connect to a database
// For now, we'll use in-memory storage for demonstration

let bookings = [];
let bookingIdCounter = 1;

export class BookingService {
  static async createBooking(bookingData) {
    const booking = {
      id: bookingIdCounter++,
      ...bookingData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    bookings.push(booking);
    return booking;
  }

  static async getAllBookings({ page = 1, limit = 10, status, date }) {
    let filteredBookings = [...bookings];
    
    if (status) {
      filteredBookings = filteredBookings.filter(b => b.status === status);
    }
    
    if (date) {
      filteredBookings = filteredBookings.filter(b => b.date === date);
    }
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    
    return {
      bookings: filteredBookings.slice(startIndex, endIndex),
      total: filteredBookings.length,
      page: parseInt(page),
      totalPages: Math.ceil(filteredBookings.length / limit)
    };
  }

  static async getBookingById(id) {
    return bookings.find(b => b.id === parseInt(id));
  }

  static async updateBookingStatus(id, status) {
    const booking = bookings.find(b => b.id === parseInt(id));
    if (booking) {
      booking.status = status;
      booking.updatedAt = new Date().toISOString();
    }
    return booking;
  }

  static async cancelBooking(id) {
    const index = bookings.findIndex(b => b.id === parseInt(id));
    if (index > -1) {
      bookings.splice(index, 1);
      return true;
    }
    return false;
  }

  static async getAvailableSlots(date) {
    // Mock available time slots
    const allSlots = [
      '08:00', '09:00', '10:00', '11:00', '12:00',
      '13:00', '14:00', '15:00', '16:00', '17:00'
    ];
    
    const bookedSlots = bookings
      .filter(b => b.date === date && b.status !== 'cancelled')
      .map(b => b.time);
    
    return allSlots.filter(slot => !bookedSlots.includes(slot));
  }
}