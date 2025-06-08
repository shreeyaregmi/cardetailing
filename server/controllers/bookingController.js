import { BookingService } from '../services/bookingService.js';
import { EmailService } from '../services/emailService.js';

export class BookingController {
  static async createBooking(req, res, next) {
    try {
      const bookingData = req.body;
      
      // Create booking
      const booking = await BookingService.createBooking(bookingData);
      
      // Send confirmation email
      await EmailService.sendBookingConfirmation(booking);
      
      res.status(201).json({
        success: true,
        message: 'Booking created successfully',
        data: booking
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllBookings(req, res, next) {
    try {
      const { page = 1, limit = 10, status, date } = req.query;
      const bookings = await BookingService.getAllBookings({ page, limit, status, date });
      
      res.json({
        success: true,
        data: bookings
      });
    } catch (error) {
      next(error);
    }
  }

  static async getBookingById(req, res, next) {
    try {
      const { id } = req.params;
      const booking = await BookingService.getBookingById(id);
      
      if (!booking) {
        return res.status(404).json({
          success: false,
          message: 'Booking not found'
        });
      }
      
      res.json({
        success: true,
        data: booking
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateBookingStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      const booking = await BookingService.updateBookingStatus(id, status);
      
      // Send status update email
      await EmailService.sendStatusUpdate(booking);
      
      res.json({
        success: true,
        message: 'Booking status updated successfully',
        data: booking
      });
    } catch (error) {
      next(error);
    }
  }

  static async cancelBooking(req, res, next) {
    try {
      const { id } = req.params;
      await BookingService.cancelBooking(id);
      
      res.json({
        success: true,
        message: 'Booking cancelled successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAvailableSlots(req, res, next) {
    try {
      const { date } = req.params;
      const slots = await BookingService.getAvailableSlots(date);
      
      res.json({
        success: true,
        data: slots
      });
    } catch (error) {
      next(error);
    }
  }
}