import express from 'express';
import { ServiceController } from '../controllers/serviceController.js';

const router = express.Router();

// Get all services
router.get('/', ServiceController.getAllServices);

// Get service by ID
router.get('/:id', ServiceController.getServiceById);

// Create new service (admin only)
router.post('/', ServiceController.createService);

// Update service (admin only)
router.put('/:id', ServiceController.updateService);

// Delete service (admin only)
router.delete('/:id', ServiceController.deleteService);

export default router;