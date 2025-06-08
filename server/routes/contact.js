import express from 'express';
import { validateContact } from '../middleware/validation.js';
import { ContactController } from '../controllers/contactController.js';

const router = express.Router();

// Submit contact form
router.post('/', validateContact, ContactController.submitContact);

// Get all contact submissions (admin only)
router.get('/', ContactController.getAllContacts);

// Mark contact as read
router.patch('/:id/read', ContactController.markAsRead);

export default router;