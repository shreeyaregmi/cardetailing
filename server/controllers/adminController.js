import { AdminService } from '../services/adminService.js';
import jwt from 'jsonwebtoken';

export class AdminController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      
      const admin = await AdminService.authenticate(email, password);
      
      if (!admin) {
        return res.status(401).json({
          success: false,
          message: 'Invalid credentials'
        });
      }
      
      const token = jwt.sign(
        { id: admin.id, email: admin.email },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );
      
      res.json({
        success: true,
        message: 'Login successful',
        data: {
          token,
          admin: {
            id: admin.id,
            email: admin.email,
            name: admin.name
          }
        }
      });
    } catch (error) {
      next(error);
    }
  }

  static async getDashboardStats(req, res, next) {
    try {
      const stats = await AdminService.getDashboardStats();
      
      res.json({
        success: true,
        data: stats
      });
    } catch (error) {
      next(error);
    }
  }

  static async getRecentBookings(req, res, next) {
    try {
      const bookings = await AdminService.getRecentBookings();
      
      res.json({
        success: true,
        data: bookings
      });
    } catch (error) {
      next(error);
    }
  }

  static async getRevenueStats(req, res, next) {
    try {
      const { period = 'month' } = req.query;
      const revenue = await AdminService.getRevenueStats(period);
      
      res.json({
        success: true,
        data: revenue
      });
    } catch (error) {
      next(error);
    }
  }
}