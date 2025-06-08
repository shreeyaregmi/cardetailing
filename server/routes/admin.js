import express from 'express';
import { AdminController } from '../controllers/adminController.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Admin login
router.post('/login', AdminController.login);

// Get dashboard stats (protected)
router.get('/dashboard', authenticateAdmin, AdminController.getDashboardStats);

// Get recent bookings (protected)
router.get('/bookings/recent', authenticateAdmin, AdminController.getRecentBookings);

// Get revenue stats (protected)
router.get('/revenue', authenticateAdmin, AdminController.getRevenueStats);

export default router;