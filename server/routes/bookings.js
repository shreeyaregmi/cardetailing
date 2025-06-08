import express from 'express';
import { validateBooking } from '../middleware/validation.js';
import { BookingController } from '../controllers/bookingController.js';

const router = express.Router();

// Create a new booking
router.post('/', validateBooking, BookingController.createBooking);

// Get all bookings (admin only)
router.get('/', BookingController.getAllBookings);

// Get booking by ID
router.get('/:id', BookingController.getBookingById);

// Update booking status
router.patch('/:id/status', BookingController.updateBookingStatus);

// Cancel booking
router.delete('/:id', BookingController.cancelBooking);

// Get available time slots
router.get('/availability/:date', BookingController.getAvailableSlots);

export default router;